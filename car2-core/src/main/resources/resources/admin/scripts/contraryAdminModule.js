'use strict';
//平台管理模块的配置
angular.module('contraryAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.contraryManage', {
		url: "/contraryManage",
		controller: "contraryManageCtrl",
		templateUrl: "admin/views/contraryManage.html"
	});
//服务配置
}).service("contraryRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("contrary/:id", {id:"@id"}, config);
//控制器
}).service("contraryUserRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.updateState={url:"contraryParticipator/:id/update", method : "PUT"};
	return $resource("contraryParticipator/:id", {id:"@id"}, config);
}).controller('contraryManageCtrl', function($scope, $uibModal, contraryRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		contraryRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.contrarys = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({
			hot: 0,
			hotplus: 1000,
			enable: false,
			top: false,
			topIndex: 0,
			recommend: false,
			redCount: 0,
			blueCount: 0,
			finish: false
		});
	}
	
	$scope.update = function(contrary) {
		$scope.save(contrary);
	}
	
	$scope.save = function(contrary){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/contraryForm.html',
			controller: 'contraryFormCtrl',
			resolve: {
		        contrary : function() {return contrary;},
			}
		}).result.then(function(form){
			if(form.id){
				new contraryRestService(form).$save().then(function(){
					commonService.showMessage("修改观点投票信息成功");
				},function(response){
					for (var i = 0; i < $scope.contrarys.length; i++) {
						if(form.id == $scope.contrarys[i].id) {
							$scope.contrarys[i] = contraryRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new contraryRestService(form).$create().then(function(contrary){
					$scope.contrarys.unshift(contrary);
					commonService.showMessage("新建观点投票成功");
				});
			}
		});
	}
	
	$scope.remove = function(contrary) {
		commonService.showConfirm("您确认要删除此观点投票?").result.then(function() {
			contraryRestService.remove({id:contrary.id}).$promise.then(function(result){
				commonService.showMessage("删除观点投票成功");
				$scope.contrarys.splice($scope.contrarys.indexOf(contrary), 1);
				if($scope.contrarys.length == 0){
					$scope.pageInfo.page = $scope.pageInfo.page - 1;
					$scope.query();
				}
			})
		});
	} 
	
	$scope.cleanCondition = function() {
		$scope.condition = {};
		$scope.query();
	}
	
	$scope.query();
	
	$scope.rank = function(contrary) {
		$uibModal.open({
			templateUrl : 'admin/views/contraryUserManage.html',
			controller: 'contraryUserManageCtrl',
			size: 'lg',
			resolve: {
		        id : function() {return contrary.id;},
			}
		})
	}
}).controller('contraryFormCtrl',function ($scope, $uibModalInstance, contrary, commonService, paramRestService) {

	if(contrary.id) {
		paramRestService.getParam({code:"weixinAppId"}).$promise.then(function(resultA){
			var weixinAppId = resultA.value;
			paramRestService.getParam({code:"oauthCallbackUrl"}).$promise.then(function(resultB){
				var oauthCallbackUrl = resultB.value
				$scope.shareLink = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+weixinAppId+"&redirect_uri="+oauthCallbackUrl+"&response_type=code&scope=snsapi_userinfo&state=%2Fcontrary%2Fdetails%3Fid%3D"+contrary.id+"#wechat_redirect"
			})
		});
	}
	
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
	
	$scope.contrary = contrary;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(contrary) {
		$uibModalInstance.close(contrary);
	};
	
	$scope.removeImg = function(image) {
		$scope.contrary.giftImages.splice($scope.contrary.giftImages.indexOf(image), 1);
	}
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.contrary.image = result;
		});
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(result){
			if($scope.contrary.giftImages == null){
				$scope.contrary.giftImages = [];
			}
			$scope.contrary.giftImages.push(result);
		});
	}
	
}).controller('contraryUserManageCtrl',function ($scope, $uibModalInstance, id, commonService, contraryUserRestService) {
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.isConditionCollapsed = true;
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.contraryId = id;
		contraryUserRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.contraryUsers = data.content;
			console.log(data.content[0]);
		});
	}

	$scope.query();
	$scope.updateState = function(contrary) {
		contraryUserRestService.updateState(contrary).$promise.then(function(data){
			contrary.state = !contrary.state;
		});
	};
	
	$scope.cleanCondition = function() {
		$scope.condition = {};
		$scope.query();
	}
	
}).filter("red",function(){
	return function(text){
		if(text){
			return "红方";
		}
		return "蓝方";
	}
}).filter("state",function(){
	return function(text){
		if(text){
			return "取消屏蔽";
		}
		return "屏蔽";
	}
});

