'use strict';
//平台管理模块的配置
angular.module('activityAdminModule',['commentAdminModule']).config(function($stateProvider) {
	//路由配置
	$stateProvider.state('index.activityManage', {
		url: "/activityManage",
		controller: "activityManageCtrl",
		templateUrl: "admin/views/activityManage.html"
	}).state('index.activityCommentManage', {
		url: "/activityCommentManage?id",
		controller: "activityCommentManageCtrl",
		templateUrl: "admin/views/activityCommentManage.html"
	});
//服务配置
}).service("activityRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("activity/:id", {id:"@id"}, config);
//控制器
}).service("sponsorRestService", function($resource){
	return $resource("sponsor");
//控制器
}).service("customerServiceService", function($resource){
	return $resource("customerService");
//控制器
}).service("activityUserRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("activityParticipator/:id", {id:"@id"}, config);
}).controller('activityManageCtrl', function($scope, $state, $uibModal, activityRestService, commonService){
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		activityRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.activitys = data.content;
			//console.log(data.content[0]);
		});
		
	}
	
	$scope.create = function() {
		$scope.save({
			hot: 0,
			hotplus: 1000,
			enable: false,
			finish: false,
			top: false,
			topIndex: 0,
			recommend: false,
			price: 0,
			images: [],
			peopleLimit: 0,
			kwlist: []
		});
	}
	
	$scope.update = function(activity) {
		$scope.save(activity);
	}
	
	$scope.save = function(activity){
		$uibModal.open({
			size: "lg",
			templateUrl : 'admin/views/activityForm.html',
			controller: 'activityFormCtrl',
			resolve: {
		        activity : function() {return activity;},
			}
		}).result.then(function(form){
			if(form.id){
				new activityRestService(form).$save().then(function(){
					commonService.showMessage("修改活动信息成功");
				},function(response){
					for (var i = 0; i < $scope.activitys.length; i++) {
						if(form.id == $scope.activitys[i].id) {
							$scope.activitys[i] = activityRestService.get({id:form.id});
							break;
						}
					}
				});
			}else{
				//console.log(form);
				new activityRestService(form).$create().then(function(activity){
					$scope.activitys.unshift(activity);
					commonService.showMessage("新建活动成功");
				});
			}
		});
	}
	
	$scope.remove = function(activity) {
		commonService.showConfirm("您确认要删除此活动?").result.then(function() {
			activityRestService.remove({id:activity.id}).$promise.then(function(result){
				commonService.showMessage("删除活动成功");
				$scope.activitys.splice($scope.activitys.indexOf(activity), 1);
				if($scope.activitys.length == 0){
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
	
	$scope.rank = function(lottery) {
		$uibModal.open({
			templateUrl : 'admin/views/activityUserManage.html',
			controller: 'activityUserManageCtrl',
			size: 'lg',
			resolve: {
		        id : function() {return lottery.id;},
			}
		})
	}
	
	$scope.toComment = function(activity) {
		$state.go("index.activityCommentManage", {id: activity.id});
	}
	
}).controller('activityCommentManageCtrl',function ($scope, $stateParams, $uibModal, commonService, commentRestService) {
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.reply = function(comment){
		$uibModal.open({
			size: "mid",
			templateUrl : 'admin/views/activityCommentReplyForm.html',
			controller: 'activityCommentReplyFormCtrl',
			resolve: {
		        comment : function() {return comment;},
			}
		}).result.then(function(form){
			commonService.showMessage(form);
		});
	}
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.withReply = true;
		condition.target = 'activity';
		condition.targetId = $stateParams.id;
		commentRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.comments = data.content;
		});
	}
	
	$scope.remove = function(comment) {
		commonService.showConfirm("您确认要删除此评论?").result.then(function() {
			commentRestService.remove({id:comment.id}).$promise.then(function(){
				commonService.showMessage("删除评论成功");
				$scope.comments.splice($scope.comments.indexOf(comment), 1);
				if($scope.comments.length == 0){
					$scope.pageInfo.page = $scope.pageInfo.page - 1;
					$scope.query();
				}
			});
		});
	} 
	
	$scope.cleanCondition = function() {
		$scope.condition = {};
		$scope.query();
	}
	
	$scope.query();
	
	
}).controller('activityCommentReplyFormCtrl',function ($scope, $uibModalInstance, comment, commonService, commentRestService) {
	
	$scope.comment = comment;
	
	$scope.reply = {};
	
	commentRestService.getReply({id: comment.id}).$promise.then(function(result){
		if(result){
			$scope.reply = result;
		}
	});
	
	$scope.save = function(reply) {
		if(reply.id){
			commentRestService.save($scope.reply).$promise.then(function(){
				$uibModalInstance.close("修改成功");
			})
		}else{
			$scope.reply.target = "activity";
			$scope.reply.targetId = comment.targetId;
			$scope.reply.replyToId = comment.id;
			commentRestService.create($scope.reply).$promise.then(function(){
				$uibModalInstance.close("回复成功");
			})
		}
	}
	
}).controller('activityUserManageCtrl',function ($scope, $uibModalInstance, id, commonService, activityUserRestService) {
	
	$scope.pageInfo = commonService.getDefaultPageSetting();
	
	$scope.isConditionCollapsed = true;
	
	$scope.query = function() {
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.activityId = id;
		activityUserRestService.query(condition).$promise.then(function(data){
			$scope.pageInfo.totalElements = data.totalElements;
			$scope.activityUsers = data.content;
			//console.log(data.content[0]);
		});
	}

	$scope.query();
	
}).controller('activityFormCtrl',function ($scope, $uibModalInstance, sponsorRestService, activity, commonService, waiterRestService, paramRestService) {
	
	if(activity.id) {
		paramRestService.getParam({code:"weixinAppId"}).$promise.then(function(resultA){
			var weixinAppId = resultA.value;
			paramRestService.getParam({code:"oauthCallbackUrl"}).$promise.then(function(resultB){
				var oauthCallbackUrl = resultB.value
				$scope.shareLink = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+weixinAppId+"&redirect_uri="+oauthCallbackUrl+"&response_type=code&scope=snsapi_userinfo&state=%2Factivity%2Fdetails%3Fid%3D"+activity.id+"#wechat_redirect"
			})
		});
	}
	
	$scope.popup1 = {
		opened : false
	};

	$scope.popup2 = {
		opened : false
	};
	
	$scope.popup3 = {
		opened : false
	};

	$scope.popup4 = {
		opened : false
	};
	
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};

	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};
	
	$scope.open3 = function() {
		$scope.popup3.opened = true;
	};

	$scope.open4 = function() {
		$scope.popup4.opened = true;
	};
	
	$scope.dateOptions = {
		startingDay : 1
	};
	
	$scope.activity = activity;
	
	$scope.changeSponsor = function(){
		angular.forEach($scope.sponsors, function(data){
			if($scope.activity.sponsorId == data.id){
				$scope.currentSponsor = data;
			}
		});
	}
	
	sponsorRestService.findAll().$promise.then(function(data){
		$scope.sponsors = data;
		$scope.changeSponsor();
	});
	
	$scope.waiters = waiterRestService.findAll();
	
	$scope.removeKeyword = function(keyword){
		$scope.activity.kwlist.splice($scope.activity.kwlist.indexOf(keyword), 1);
	}
	
	$scope.addKeyword2 = function(e){
		var keycode = window.event?e.keyCode:e.which;
        if(keycode==13){
        	$scope.addKeyword($scope.newKeyword);
        }
	}
	
	$scope.addKeyword = function(newKeyword){
		if($scope.activity.kwlist.indexOf(newKeyword) == -1){
			$scope.activity.kwlist.push(newKeyword);
			$scope.newKeyword = "";
		}else{
			commonService.showWarning("关键字已存在");
		}
	}
	
	$scope.tinymceOptions = commonService.getDefaultTinymceOptions();
	
	$scope.save = function(activity) {
		$uibModalInstance.close(activity);
	};
	
	$scope.removeImg = function(image) {
		$scope.activity.images.splice($scope.activity.images.indexOf(image), 1);
	}
	
	$scope.doUpload = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.activity.image = result;
		});
	}
	
	$scope.doUpload2 = function(files){
		commonService.uploadImage(files, $scope, function(result){
			$scope.activity.images.push(result);
		});
	}
	
});