'use strict';
//平台管理模块的配置
angular.module('statisticsAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.statisticsManage', {
		url: "/statisticsManage",
		controller: "statisticsManageCtrl",
		templateUrl: "admin/views/statisticsManage.html"
	}).state('index.statisticsManage2', {
		url: "/statisticsManage2",
		controller: "statisticsManageCtrl2",
		templateUrl: "admin/views/statisticsManage2.html"
	});
//服务配置
}).service("statisticsRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.drawStaByPage = {url:"statistics/draw/page", method: "GET", isArray: true}
	config.drawStaByRegion = {url:"statistics/draw/region", method: "GET", isArray: true}
	config.drawCountByPage = {url:"statistics/draw/page/count", method: "GET", isArray: true}
	return $resource("statistics/:id", {id:"@id"}, config);
//控制器
}).controller('statisticsManageCtrl', function($scope, $uibModal, statisticsRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		statisticsRestService.drawStaByPage(condition).$promise.then(function(data){
			$scope.statisticss = data;
		});
	}
	
	$scope.counts = [0,0,0];
	
	$scope.query2 = function() {
		statisticsRestService.drawCountByPage().$promise.then(function(data){
			console.log(data);
			$scope.counts = data;
		});
	}
	
	$scope.query();
	$scope.query2();
	
}).controller('statisticsManageCtrl2', function($scope, $uibModal, statisticsRestService, commonService){
	
	$scope.query = function() {
		statisticsRestService.drawStaByRegion().$promise.then(function(data){
			$scope.statisticss = data;
		});
	}
	$scope.query();
	
});