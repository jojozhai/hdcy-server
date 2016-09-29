'use strict';
//平台管理模块的配置
angular.module('lotteryAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.lotteryManage', {
		url: "/lotteryManage",
		controller: "lotteryManageCtrl",
		templateUrl: "admin/views/lotteryManage.html"
	});
//服务配置
}).service("lotteryRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("lottery/:id", {id:"@id"}, config);
}).service("lotteryUserRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.updateCount={url:"lotteryParticipator/:id/update", method : "PUT"};
	return $resource("lotteryParticipator/:id", {id:"@id"}, config);
}).controller('lotteryManageCtrl', function($scope, $uibModal, lotteryRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		lotteryRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.lotterys = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({
			hot: 0,
			hotplus: 1000,
			top: false,
			topIndex: 0,
			recommend: false,
			prizes: [],
			limit: 3,
			enable: false
		});
	}
	
	$scope.update = function(lottery) {
		$scope.save(lottery);
	}
	
	$scope.save = function(lottery){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/lotteryForm.html',
			controller: 'lotteryFormCtrl',
			resolve: {
		        lottery : function() {return lottery;},
			}
		}).result.then(function(form){
			if(form.id){
				new lotteryRestService(form).$save().then(function(){
					commonService.showMessage("修改抽奖信息成功");
				},function(response){
					for (var i = 0; i < $scope.lotterys.length; i++) {
						if(form.id == $scope.lotterys[i].id) {
							$scope.lotterys[i] = lotteryRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new lotteryRestService(form).$create().then(function(lottery){
					$scope.lotterys.unshift(lottery);
					commonService.showMessage("新建抽奖成功");
				});
			}
		});
	}
	
	$scope.remove = function(lottery) {
		commonService.showConfirm("您确认要删除此抽奖?").result.then(function() {
			lotteryRestService.remove({id:lottery.id});
		}).then(function(){
			commonService.showMessage("删除抽奖成功");
			$scope.lotterys.splice($scope.lotterys.indexOf(lottery), 1);
			if($scope.lotterys.length == 0){
				$scope.pageInfo.page = $scope.pageInfo.page - 1;
				$scope.query();
			}
		});
	} 
	
	$scope.cleanCondition = function() {
		$scope.condition = {};
		$scope.query();
	}
	
	$scope.query();
	
	$scope.rank = function(lottery) {
		$uibModal.open({
			templateUrl : 'admin/views/lotteryUserManage.html',
			controller: 'lotteryUserManageCtrl',
			size: 'lg',
			resolve: {
		        id : function() {return lottery.id;},
			}
		})
	}
	
}).controller('lotteryUserManageCtrl',function ($scope, $uibModalInstance, id, commonService, lotteryUserRestService) {
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.isConditionCollapsed = true;
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.lotteryId = id;
		lotteryUserRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.lotteryUsers = data.content;
			console.log(data.content[0]);
		});
	}

	$scope.query();
	
	$scope.updateCount = function(lotteryUser){
		lotteryUserRestService.updateCount(lotteryUser).$promise.then(function(data){
			lotteryUser.change = !lotteryUser.change;
		});	
	}
}).controller('lotteryFormCtrl',function ($scope, $uibModalInstance, lottery, commonService, waiterRestService, paramRestService) {
	
	$scope.waiters = waiterRestService.findAll();
	
	if(lottery.id) {
		paramRestService.getParam({code:"weixinAppId"}).$promise.then(function(resultA){
			var weixinAppId = resultA.value;
			paramRestService.getParam({code:"oauthCallbackUrl"}).$promise.then(function(resultB){
				var oauthCallbackUrl = resultB.value
				$scope.shareLink = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+weixinAppId+"&redirect_uri="+oauthCallbackUrl+"&response_type=code&scope=snsapi_userinfo&state=%2Flottery%2Fdetails%3Fid%3D"+lottery.id+"#wechat_redirect"
			})
		});
	}
	
	var probability = 0;
	
	$scope.popup1 = {
		opened : false
	};

	$scope.popup2 = {
		opened : false
	};
	
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};

	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};
	
	$scope.dateOptions = {
		startingDay : 1
	};

	$scope.lottery = lottery;
	
	for (var int = 0; int < lottery.prizes.length; int++) {
		probability += lottery.prizes[int].rate;
	}
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(lottery) {
		console.log(probability);
		if(probability!=100){
			alert("中奖概率和应为100")
		}else{
			$uibModalInstance.close(lottery);
		}
	};
	
	$scope.addPrize = function(newPrize){
		if(!newPrize.win&&newPrize.count!=undefined){
			alert("非中奖奖项，奖品数量不可设置");
		}else{
			if(newPrize.count==0&&newPrize.rate!=0){
				alert("中奖奖项，数量为0，中奖几率也应为0");
			}else{
				probability+=newPrize.rate;
				if($scope.lottery.prizes.indexOf(newPrize) == -1){
					$scope.lottery.prizes.push(newPrize);
					$scope.newPrize = "";
				}else{
					commonService.showWarning("奖品已存在");
				}
			}		
		}	
	}
	
	$scope.addPrize2 = function(e){
		var keycode = window.event?e.keyCode:e.which;
        if(keycode==13){
        	$scope.addPrize($scope.newPrize);
        }
	}
	
	$scope.removePrize = function(prize){
		probability-=prize.rate;
		$scope.lottery.prizes.splice($scope.lottery.prizes.indexOf(prize), 1);
	}
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.lottery.image = result;
		});
	}
}).filter("isChange",function(){
	return function(text){
		if(text){
			return "已兑换";
		}
		return "未兑换";
	}
});;