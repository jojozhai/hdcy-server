'use strict';
//平台管理模块的配置
angular.module('leaderAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.leaderManage', {
		url: "/leaderManage",
		controller: "leaderManageCtrl",
		templateUrl: "admin/views/leaderManage.html"
	});
//服务配置
}).service("leaderRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("leader/:id", {id:"@id"}, config);
//控制器
}).controller('leaderManageCtrl', function($scope, $uibModal, leaderRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		leaderRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.leaders = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({
			enable:true,
			topIndex:0,
			top:false,
			organ:false
		});
	}
	
	$scope.update = function(leader) {
		$scope.save(leader);
	}
	
	$scope.save = function(leader){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/leaderForm.html',
			controller: 'leaderFormCtrl',
			resolve: {
		        leader : function() {return leader;},
			}
		}).result.then(function(form){
			if(form.id){
				new leaderRestService(form).$save().then(function(){
					commonService.showMessage("修改大咖成功");
				},function(response){
					for (var i = 0; i < $scope.leaders.length; i++) {
						if(form.id == $scope.leaders[i].id) {
							$scope.leaders[i] = leaderRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new leaderRestService(form).$create().then(function(leader){
					$scope.leaders.unshift(leader);
					commonService.showMessage("新建大咖成功");
				});
			}
		});
	}
	
	$scope.remove = function(leader) {
		commonService.showConfirm("您确认要删除此大咖?").result.then(function() {
			leaderRestService.remove({id:leader.id}).$promise.then(function(result){
				commonService.showMessage("删除大咖成功");
				$scope.leaders.splice($scope.leaders.indexOf(leader), 1);
				if($scope.leaders.length == 0){
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
	
}).controller('leaderFormCtrl',function ($scope, $uibModalInstance, leader, commonService) {

	$scope.leader = leader;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(leader) {
		$uibModalInstance.close(leader);
	};
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.leader.topImage = result;
		});
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.leader.image = result;
		});
	}
	
	$scope.statuses = [{name:"未处理", value:"INIT"},{name:"通过", value:"APPROVE"},{name:"拒绝", value:"DENY"}];
	
}).filter("leaderStatus", function(){
	return function (data) {
		if(data == "INIT"){
			return "未处理";
		}else if(data == "APPROVE"){
			return "通过";
		}else if(data == "DENY"){
			return "拒绝";
		}else{
			return "未知";
		}
	}
});