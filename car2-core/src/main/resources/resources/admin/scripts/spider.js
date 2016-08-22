'use strict';
// 平台管理模块的配置
angular.module('yr', []).config(function($stateProvider) {
	// 路由配置
	$stateProvider.state('index.spidertest', {
		url : "/spider",
		controller : "spiderCtrl",
		templateUrl : "admin/views/spidertest.html"
	});
	// 服务配置
}).service("spiderService", function($resource) {
	return $resource("addspider");
	// 控制器
}).controller('spiderCtrl', function($scope,spiderService) {
	$scope.save = function(yangr) {
		spiderService.save(yangr).$promise.then(function(){

		});
	}
})