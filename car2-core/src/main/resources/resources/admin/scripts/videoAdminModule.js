'use strict';
//平台管理模块的配置
angular.module('videoAdminModule',[]).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.videoManage', {
		url: "/videoManage",
		controller: "videoManageCtrl",
		templateUrl: "admin/views/videoManage.html"
	});
//服务配置
}).service("videoRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("video/:id", {id:"@id"}, config);
//控制器
}).controller('videoManageCtrl', function($scope, $stateParams, $uibModal, videoRestService, commonService){

	$scope.pageInfo = commonService.getDefaultPageSetting();

	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.live = false;
		videoRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.videos = data.content;
		});
	}

	$scope.create = function() {
		$scope.save({viewCount: 0, viewCountPlus: 0, live: false, enable: true, top: false, liveForApp: false, liveForWeixin:false, replay: false});
	}

	$scope.update = function(video) {
		$scope.save(video);
	}
	
	$scope.editContent = function(video) {
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/umeditor.html',
			controller: 'umeditorCtrl',
			resolve: {
		        domain : function() {return video;},
		        params : function() {
		        	return {
		        		target: 'video',
		        		targetId: video.id,
		        		targetProp: 'desc'
		        	}
		        }
			}
		})
	}

	$scope.save = function(video){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/videoForm.html',
			controller: 'videoFormCtrl',
			resolve: {
		        video : function() {return video;},
		        videos : function() {return $scope.videos;}
			}
		}).result.then(function(form){

		});
	}

	$scope.remove = function(video) {
		commonService.showConfirm("您确认要删除此视频?").result.then(function() {
			videoRestService.remove({id:video.id}).$promise.then(function(result){
				commonService.showMessage("删除视频成功");
				$scope.videos.splice($scope.videos.indexOf(video), 1);
				if($scope.videos.length == 0){
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

}).controller('videoFormCtrl',function ($scope, $uibModalInstance, video, videos, videoRestService, commonService, sponsorRestService) {

	videoRestService.query({live:true, size: 1000, sort: 'createdTime,desc'}).$promise.then(function(result){
		$scope.shows = result.content;
	})
	
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
		minDate : new Date(),
		startingDay : 1
	};

	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.video.image = result;
		});
	}

	if(video.id){
		$scope.video = videoRestService.get({id: video.id});
	}else{
		$scope.video = video;
	}
	

	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();

	$scope.save = function(video) {
		if(video.id){
			console.log("update video");

			new videoRestService(video).$save().then(function(){
				commonService.showMessage("修改视频信息成功");
				$uibModalInstance.close(video);
			},function(response){
				for (var i = 0; i < $scope.videos.length; i++) {
					if(video.id == $scope.videos[i].id) {
						$scope.videos[i] = videoRestService.get({id:video.id});
						break;
					}
				}
			});
		}else{
			console.log("create video");
			new videoRestService(video).$create().then(function(result){
				commonService.showMessage("新建视频成功");
				videos.unshift(result);
				$uibModalInstance.close(result);
			});
		}

	};

	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.video.image = result;
		});
	}

});
