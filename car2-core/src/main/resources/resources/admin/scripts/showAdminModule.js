'use strict';
//平台管理模块的配置
angular.module('showAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.showManage', {
		url: "/showManage",
		controller: "showManageCtrl",
		templateUrl: "admin/views/showManage.html"
	});
//服务配置
}).service("showRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("video/:id", {id:"@id"}, config);
//控制器
}).controller('showManageCtrl', function($scope, $stateParams, $uibModal, showRestService, commonService){

	$scope.pageInfo = commonService.getDefaultPageSetting();

	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.live = true;
		showRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.shows = data.content;
		});
	}

	$scope.create = function() {
		$scope.save({viewCount: 0, viewCountPlus: 0, live: true, enable: true, top: false, liveForApp: true, liveForWeixin: false});
	}

	$scope.update = function(show) {
		$scope.save(show);
	}

	$scope.save = function(show){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/showForm.html',
			controller: 'showFormCtrl',
			resolve: {
		        show : function() {return show;},
		        shows : function() {return $scope.shows;}
			}
		}).result.then(function(form){

		});
	}

	$scope.remove = function(show) {
		commonService.showConfirm("您确认要删除此直播?").result.then(function() {
			showRestService.remove({id:show.id}).$promise.then(function(result){
				commonService.showMessage("删除直播成功");
				$scope.shows.splice($scope.shows.indexOf(show), 1);
				if($scope.shows.length == 0){
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

}).controller('showFormCtrl',function ($scope, $uibModalInstance, show, shows, showRestService, commonService, sponsorRestService) {

	sponsorRestService.findAll().$promise.then(function(data){
		$scope.sponsors = data;
	});
	
	$scope.popup1 = {
		opened : false
	};

	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};
	
	$scope.popup2 = {
		opened : false
	};

	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};

	$scope.dateOptions = {
		startingDay : 1
	};

	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.show.image = result;
		});
	}
	
	if(show.id){
		showRestService.get({id: show.id}).$promise.then(function(result){
			$scope.show = result;
			$scope.liveType = $scope.show.liveForApp?'app':'weixin';
		});
	}else{
		$scope.show = show;
		$scope.liveType = $scope.show.liveForApp?'app':'weixin';
	}
	

	$scope.liveTypes = [{value:'app',name:'APP直播'},{value:'weixin', name:'微信直播'}];

	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();

	$scope.save = function(show) {
		if(show.id){
			console.log("update show");

			new showRestService(show).$save().then(function(){
				commonService.showMessage("修改直播信息成功");
				$uibModalInstance.close(show);
			},function(response){
				for (var i = 0; i < $scope.shows.length; i++) {
					if(show.id == $scope.shows[i].id) {
						$scope.shows[i] = showRestService.get({id:show.id});
						break;
					}
				}
			});
		}else{
			console.log("create show");
			new showRestService(show).$create().then(function(result){
				commonService.showMessage("新建直播成功");
				shows.unshift(result);
				$uibModalInstance.close(result);
			});
		}

	};

	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.show.image = result;
		});
	}

});
