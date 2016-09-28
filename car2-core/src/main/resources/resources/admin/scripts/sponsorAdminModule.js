'use strict';
//平台管理模块的配置
angular.module('sponsorAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.sponsorManage', {
		url: "/sponsorManage",
		controller: "sponsorManageCtrl",
		templateUrl: "admin/views/sponsorManage.html"
	});
//服务配置
}).service("sponsorRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.findAll = {url:"sponsor/all", method:"GET", isArray:true};
	return $resource("sponsor/:id", {id:"@id"}, config);
//控制器
}).controller('sponsorManageCtrl', function($scope, $uibModal, sponsorRestService, commonService) {

	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		sponsorRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.sponsors = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({});
	}
	
	$scope.update = function(sponsor) {
		$scope.save(sponsor);
	}
	
	$scope.save = function(sponsor){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/sponsorForm.html',
			controller: 'sponsorFormCtrl',
			resolve: {
		        sponsor : function() {return sponsor;},
			}
		}).result.then(function(form){
			if(form.id){
				new sponsorRestService(form).$save().then(function(){
					commonService.showMessage("修改主办方信息成功");
				},function(response){
					for (var i = 0; i < $scope.sponsors.length; i++) {
						if(form.id == $scope.sponsors[i].id) {
							$scope.sponsors[i] = sponsorRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new sponsorRestService(form).$create().then(function(sponsor){
					$scope.sponsors.unshift(sponsor);
					commonService.showMessage("新建主办方成功");
				});
			}
		});
	}
	
	$scope.remove = function(sponsor) {
		commonService.showConfirm("您确认要删除此主办方?").result.then(function() {
			sponsorRestService.remove({id:sponsor.id});
		}).then(function(){
			commonService.showMessage("删除主办方成功");
			$scope.sponsors.splice($scope.sponsors.indexOf(sponsor), 1);
			if($scope.sponsors.length == 0){
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
	
}).controller('sponsorFormCtrl',function ($scope, $uibModalInstance, sponsor, commonService) {
	
	$scope.sponsor = sponsor;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(sponsor) {
		$uibModalInstance.close(sponsor);
	};
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(imageUrl){
			$scope.sponsor.image = imageUrl;
		})		
	}
	
});