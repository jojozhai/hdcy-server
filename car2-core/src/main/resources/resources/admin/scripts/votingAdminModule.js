'use strict';
//平台管理模块的配置
angular.module('votingAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.votingManage', {
		url: "/votingManage",
		controller: "votingManageCtrl",
		templateUrl: "admin/views/votingManage.html"
	});
//服务配置
}).service("votingUserRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.updateState={url:"votingParticipator/:id/update", method : "PUT"};
	return $resource("votingParticipator/:id", {id:"@id"}, config);
}).service("votingRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("voting/:id", {id:"@id"}, config);
//控制器
}).controller('votingManageCtrl', function($scope, $uibModal, votingRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		votingRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.votings = data.content;
		});
	}
	
	$scope.create = function() {
		$scope.save({
			enable: false, xx
			price: 0,
			giftImages: [],
			peopleLimit: 0,
			voteLimit1: 3,
			voteLimit2: 5
		});
	}
	
	$scope.update = function(voting) {
		$scope.save(voting);
	}
	
	$scope.save = function(voting){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/votingForm.html',
			controller: 'votingFormCtrl',
			resolve: {
		        voting : function() {return voting;},
			}
		}).result.then(function(form){
			if(form.id){
				new votingRestService(form).$save().then(function(){
					commonService.showMessage("修改投票信息成功");
				},function(response){
					for (var i = 0; i < $scope.votings.length; i++) {
						if(form.id == $scope.votings[i].id) {
							$scope.votings[i] = votingRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				new votingRestService(form).$create().then(function(voting){
					$scope.votings.unshift(voting);
					commonService.showMessage("新建投票成功");
				});
			}
		});
	}
	
	$scope.remove = function(voting) {
		commonService.showConfirm("您确认要删除此投票?").result.then(function() {
			votingRestService.remove({id:voting.id}).$promise.then(function(result){
				commonService.showMessage("删除投票成功");
				$scope.votings.splice($scope.votings.indexOf(voting), 1);
				if($scope.votings.length == 0){
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
	
	$scope.rank = function(voting) {
		$uibModal.open({
			templateUrl : 'admin/views/votingUserManage.html',
			controller: 'votingUserManageCtrl',
			size: 'lg',
			resolve: {
		        id : function() {return voting.id;},
			}
		})
	}
	
}).controller('votingUserManageCtrl',function ($scope, $uibModalInstance, id, commonService, votingUserRestService) {
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.isConditionCollapsed = true;
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.votingId = id;
		votingUserRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.votingUsers = data.content;
		});
	}

	$scope.query();
	
	$scope.updateState = function(voting) {
		votingUserRestService.updateState(voting).$promise.then(function(data){
			voting.state = !voting.state;
		});
	};
	
	$scope.cleanCondition = function() {
		$scope.condition = {};
		$scope.query();
	}
	
}).controller('votingFormCtrl',function ($scope, $uibModalInstance, voting, commonService) {

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
	
	$scope.voting = voting;
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(voting) {
		$uibModalInstance.close(voting);
	};
	
	$scope.removeImg = function(image) {
		$scope.voting.giftImages.splice($scope.voting.giftImages.indexOf(image), 1);
	}
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.voting.image = result;
		});
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(result){
			if($scope.voting.giftImages == null){
				$scope.voting.giftImages = [];
			}
			$scope.voting.giftImages.push(result);
		});
	}
	
}).filter("state",function(){
	return function(text){
		if(text){
			return "取消屏蔽";
		}
		return "屏蔽";
	}
});