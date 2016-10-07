'use strict';
//平台管理模块的配置
angular.module('signtempAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.signtempManage', {
		url: "/signtempManage",
		controller: "signtempManageCtrl",
		templateUrl: "admin/views/signtempManage.html"
	});
//服务配置
}).service("signtempRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.findAll = {url:"signtemp/all", method:"GET", isArray:true};
	return $resource("signtemp/:id", {id:"@id"}, config);
//控制器
}).controller('signtempManageCtrl', function($scope, $uibModal, signtempRestService, commonService) {

	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		signtempRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.signtemps = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({saleCount: 0, saleCountPlus: 100});
	}
	
	$scope.update = function(signtemp) {
		$scope.save(signtemp);
	}
	
	$scope.save = function(signtemp){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/signtempForm.html',
			controller: 'signtempFormCtrl',
			resolve: {
		        signtemp : function() {return signtemp;},
			}
		}).result.then(function(form){
			if(form.id){
				new signtempRestService(form).$save().then(function(){
					commonService.showMessage("修改报名信息成功");
				},function(response){
					for (var i = 0; i < $scope.signtemps.length; i++) {
						if(form.id == $scope.signtemps[i].id) {
							$scope.signtemps[i] = signtempRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new signtempRestService(form).$create().then(function(signtemp){
					$scope.signtemps.unshift(signtemp);
					commonService.showMessage("新建报名成功");
				});
			}
		});
	}
	
	$scope.remove = function(signtemp) {
		commonService.showConfirm("您确认要删除此报名?").result.then(function() {
			signtempRestService.remove({id:signtemp.id});
		}).then(function(){
			commonService.showMessage("删除报名成功");
			$scope.signtemps.splice($scope.signtemps.indexOf(signtemp), 1);
			if($scope.signtemps.length == 0){
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
	
}).controller('signtempFormCtrl',function ($scope, $uibModalInstance, signtemp, commonService) {
	
	$scope.signtemp = signtemp;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(signtemp) {
		$uibModalInstance.close(signtemp);
	};
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(imageUrl){
			$scope.signtemp.image = imageUrl;
		})		
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(imageUrl){
			$scope.signtemp.desc = imageUrl;
		})		
	}
	
});