'use strict';
//平台管理模块的配置
angular.module('giftAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.giftManage', {
		url: "/giftManage",
		controller: "giftManageCtrl",
		templateUrl: "admin/views/giftManage.html"
	});
//服务配置
}).service("giftRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("gift/:id", {id:"@id"}, config);
//控制器
}).controller('giftManageCtrl', function($scope, $uibModal, giftRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		giftRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.gifts = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({
			point: 1000,
			images: [],
			stock: 100
		});
	}
	
	$scope.update = function(gift) {
		$scope.save(gift);
	}
	
	$scope.editContent = function(gift, prop) {
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/umeditor.html',
			controller: 'umeditorCtrl',
			resolve: {
		        domain : function() {return gift;},
		        params : function() {
		        	return {
		        		target: 'gift',
		        		targetId: gift.id,
		        		targetProp: prop
		        	}
		        }
			}
		})
	}
	
	$scope.save = function(gift){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/giftForm.html',
			controller: 'giftFormCtrl',
			resolve: {
		        gift : function() {return gift;},
			}
		}).result.then(function(form){
			if(form.id){
				new giftRestService(form).$save().then(function(){
					commonService.showMessage("修改礼品信息成功");
				},function(response){
					for (var i = 0; i < $scope.gifts.length; i++) {
						if(form.id == $scope.gifts[i].id) {
							$scope.gifts[i] = giftRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new giftRestService(form).$create().then(function(gift){
					$scope.gifts.unshift(gift);
					commonService.showMessage("新建礼品成功");
				});
			}
		});
	}
	
	$scope.remove = function(gift) {
		commonService.showConfirm("您确认要删除此礼品?").result.then(function() {
			giftRestService.remove({id:gift.id}).$promise.then(function(result){
				commonService.showMessage("删除礼品成功");
				$scope.gifts.splice($scope.gifts.indexOf(gift), 1);
				if($scope.gifts.length == 0){
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
	
}).controller('giftFormCtrl',function ($scope, $uibModalInstance, gift, commonService) {

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
		minDate : new Date(),
		startingDay : 1
	};
	
	$scope.gift = gift;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(gift) {
		$uibModalInstance.close(gift);
	};
	
	$scope.removeImg = function(image) {
		$scope.gift.images.splice($scope.gift.images.indexOf(image), 1);
	}
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.gift.brandImage = result;
		});
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(result){
			if($scope.gift.images == null){
				$scope.gift.images = [];
			}
			console.log(result);
			$scope.gift.images.push(result);
		});
	}
	
});