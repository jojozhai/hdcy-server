'use strict';
//平台管理模块的配置
angular.module('waiterAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.waiterManage', {
		url: "/waiterManage",
		controller: "waiterManageCtrl",
		templateUrl: "admin/views/waiterManage.html"
	});
//服务配置
}).service("waiterRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.findAll = {url:"waiter/all", method:"GET", isArray:true};
	return $resource("waiter/:id", {id:"@id"}, config);
//控制器
}).controller('waiterManageCtrl', function($scope, $uibModal, waiterRestService, commonService) {

	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		waiterRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.waiters = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({});
	}
	
	$scope.update = function(waiter) {
		$scope.save(waiter);
	}
	
	$scope.save = function(waiter){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/waiterForm.html',
			controller: 'waiterFormCtrl',
			resolve: {
		        waiter : function() {return waiter;},
			}
		}).result.then(function(form){
			if(form.id){
				new waiterRestService(form).$save().then(function(){
					commonService.showMessage("修改客服信息成功");
				},function(response){
					for (var i = 0; i < $scope.waiters.length; i++) {
						if(form.id == $scope.waiters[i].id) {
							$scope.waiters[i] = waiterRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new waiterRestService(form).$create().then(function(waiter){
					$scope.waiters.unshift(waiter);
					commonService.showMessage("新建客服成功");
				});
			}
		});
	}
	
	$scope.remove = function(waiter) {
		commonService.showConfirm("您确认要删除此客服?").result.then(function() {
			waiterRestService.remove({id:waiter.id});
		}).then(function(){
			commonService.showMessage("删除客服成功");
			$scope.waiters.splice($scope.waiters.indexOf(waiter), 1);
			if($scope.waiters.length == 0){
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
	
}).controller('waiterFormCtrl',function ($scope, $uibModalInstance, waiter, commonService) {
	
	$scope.waiter = waiter;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(waiter) {
		$uibModalInstance.close(waiter);
	};
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(imageUrl){
			$scope.waiter.image = imageUrl;
		})		
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(imageUrl){
			$scope.waiter.qrcode = imageUrl;
		})		
	}
	
});