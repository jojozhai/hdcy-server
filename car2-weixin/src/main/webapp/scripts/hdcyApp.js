'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 * Main module of the application.
 */
//内容大于这个长度时显示扩展箭头
var contentLimit = 150;
//应用主模块
angular.module('hdcyApp', ['weixin',
    'socialWeixinModule',
    'userWeixinModule',
    'smsWeixinModule',
    'paramWeixinModule',
    'tagWeixinModule'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$stateProvider.state('app', {
		abstract: true,
		templateUrl: "views/main.html"
	}).state('app.agreement', {
		url: "/agreement",
		controller: "agreementCtrl",
		templateUrl: "views/agreement.html"
	}).state('app.comment', {
		url: "/comment?target&targetId",
		controller: "commentCtrl",
		templateUrl: "views/comment.html"
	}).state('app.user', {
		abstract: true,
		url: "/user",
		templateUrl: "views/main.html"
	}).state('app.user.details', {
		url: "/details?id",
		controller: "userDetailsCtrl",
		templateUrl: "views/user/details.html"
	}).state('app.user.info', {
		url: "/info?from&requireAll&view",
		controller: "userInfoCtrl",
		templateUrl: "views/user/info.html"
	}).state('app.article', {
		abstract: true,
		url: "/article",
		templateUrl: "views/main.html"
	}).state('app.article.list', {
		url: "/list?tag",
		controller: "articleListCtrl",
		templateUrl: "views/article/list.html"
	}).state('app.article.details', {
		url: "/details?id&tag",
		controller: "articleDetailsCtrl",
		templateUrl: "views/article/details.html"
	}).state('app.participation', {
		abstract: true,
		url: "/participation",
		templateUrl: "views/main.html"
	}).state('app.participation.list', {
		url: "/list",
		controller: "participationListCtrl",
		templateUrl: "views/participation/list.html"
	}).state('app.activity', {
		abstract: true,
		url: "/activity?id",
		templateUrl: "views/main.html"
	}).state('app.activity.details', {
		url: "/details",
		controller: "activityDetailsCtrl",
		templateUrl: "views/activity/details.html"
	}).state('app.video', {
		abstract: true,
		url: "/video",
		templateUrl: "views/main.html"
	}).state('app.video.list', {
		url: "/list?tag",
		controller: "videoListCtrl",
		templateUrl: "views/video/list.html"
	}).state('app.video.details', {
		url: "/details?id&tag",
		controller: "videoDetailsCtrl",
		templateUrl: "views/video/details.html"
	}).state('app.voting', {
		abstract: true,
		url: "/voting?id",
		templateUrl: "views/main.html"
	}).state('app.voting.details', {
		url: "/details",
		controller: "votingDetailsCtrl",
		templateUrl: "views/voting/details.html"
	}).state('app.voting.enroll', {
		url: "/enroll",
		controller: "votingEnrollCtrl",
		templateUrl: "views/voting/enroll.html"
	}).state('app.voting.enrollResult', {
		url: "/enrollResult",
		controller: "votingEnrollResultCtrl",
		templateUrl: "views/voting/enrollResult.html"
	}).state('app.voting.participator', {
		url: "/participator?participatorId",
		controller: "votingParticipatorCtrl",
		templateUrl: "views/voting/participator.html"
	}).state('app.voting.voteResult', {
		url: "/voteResult",
		controller: "votingVoteResultCtrl",
		templateUrl: "views/voting/voteResult.html"
	}).state('app.lottery', {
		abstract: true,
		url: "/lottery?id",
		templateUrl: "views/main.html"
	}).state('app.lottery.details', {
		url: "/details?view",
		controller: "lotteryDetailsCtrl",
		templateUrl: "views/lottery/details.html"
	}).state('app.contrary', {
		abstract: true,
		url: "/contrary?id",
		templateUrl: "views/main.html"
	}).state('app.contrary.details', {
		url: "/details",
		controller: "contraryDetailsCtrl",
		templateUrl: "views/contrary/details.html"
	}).state('app.contrary.result', {
		url: "/result",
		controller: "contraryResultCtrl",
		templateUrl: "views/contrary/result.html"
	}).state('app.leader', {
		abstract: true,
		url: "/leader",
		templateUrl: "views/main.html"
	}).state('app.leader.list', {
		url: "/list",
		controller: "leaderListCtrl",
		templateUrl: "views/leader/list.html"
	}).state('app.leader.apply', {
		url: "/apply",
		controller: "leaderApplyCtrl",
		templateUrl: "views/leader/apply.html"
	}).state('app.leader.details', {
		url: "/details?id&userId",
		controller: "leaderDetailsCtrl",
		templateUrl: "views/leader/details.html"
	}).state('app.my', {
		abstract: true,
		url: "/my",
		controller: "myMainCtrl",
		templateUrl: "views/main.html"
	}).state('app.my.list', {
		url: "/list",
		controller: "myListCtrl",
		templateUrl: "views/my/list.html"
	}).state('app.my.info', {
		url: "/info",
		controller: "myInfoCtrl",
		templateUrl: "views/my/info.html"
	}).state('app.my.mobile', {
		url: "/mobile",
		controller: "myMobileCtrl",
		templateUrl: "views/my/mobile.html"
	}).state('app.my.participation', {
		url: "/participation",
		controller: "myParticipationCtrl",
		templateUrl: "views/my/participation.html"
	}).state('app.my.about', {
		url: "/about",
		controller: "myAboutCtrl",
		templateUrl: "views/my/about.html"
	}).state('app.gift', {
		abstract: true,
		url: "/gift",
		templateUrl: "views/main.html"
	}).state('app.gift.list', {
		url: "/list",
		controller: "giftListCtrl",
		templateUrl: "views/gift/list.html"
	}).state('app.gift.details', {
		url: "/details?id",
		controller: "giftDetailsCtrl",
		templateUrl: "views/gift/details.html"
	});

}).controller('appMainCtrl', function($scope, $rootScope, $state, $location, userRestService, paramRestService) {

	$scope.globalConfig = {
		enablePullToRefresh: false
	}

	paramRestService.getParam({code: "showVideo"}).$promise.then(function(result){
		$scope.showVideo = (result.value == "true");
	});

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		var enablePullToRefreshStates = ["app.article.list"];
		$scope.globalConfig.enablePullToRefresh = $.inArray(toState.name, enablePullToRefreshStates) != -1;
		$(document.body).pullToRefreshDone();
	});
	$scope.checkLogin = function(from){
		userRestService.current().$promise.then(function(result){
			if(typeof from == 'function'){
				from();
			}else{
				$location.url(from);
			}
		});
	}

	$scope.checkUserInfo = function(from){
		userRestService.current().$promise.then(function(result){
			if(isEmpty(result.realname) || isEmpty(result.mobile)){
				$state.go("app.user.info", {from: $location.url()});
			}else{
				if(typeof from == 'function'){
					from();
				}else{
					$location.url(from);
				}
			}
		});
	}

	$scope.closeWindow = function(){
		WeixinJSBridge.call('closeWindow');
	}
//	$scope.colors='video';
    $scope.navBtn = function(order) {
		$scope.colors = order;
	}



}).controller('userDetailsCtrl', function($scope) {

}).controller('userInfoCtrl', function($scope, $stateParams, $location, smsRestService, userRestService, commonService, weixinService, paramRestService, carRestService) {
	weixinService.initWx();
	userRestService.current().$promise.then(function(result){
		$scope.user = result;
		$scope.user.birthday = new Date(result.birthday);
		$scope.choiceLikes = $scope.user.tags.split(",");
		if($scope.choiceLikes.length == 1 && isEmpty($scope.choiceLikes[0])){
			$scope.choiceLikes = [];
		}

		paramRestService.getParam({code: "hdcyLikes"}).$promise.then(function(result){
			$scope.likes = result.value.split(',');
			for (var i = 0; i < $scope.choiceLikes.length; i++) {
				if(!isEmpty($scope.choiceLikes[i])){
					if($.inArray($scope.choiceLikes[i], $scope.likes) == -1){
						$scope.likes.push($scope.choiceLikes[i]);
					}
				}
			}
			$scope.likes.push("其它");
		});

	});

	$scope.currentView = isEmpty($stateParams.view)?"main":$stateParams.view;

	$scope.clickLike = function(like) {
		if($.inArray(like, $scope.choiceLikes) == -1){
			if($scope.choiceLikes.length < 4){
				if(like == "其它"){
					$scope.showLikeDiv = true;
				}else{
					$scope.choiceLikes.push(like);
				}
			}else{
				commonService.showWarning("最多只能选择4个喜好");
			}
		}else{
			$scope.choiceLikes.splice($scope.choiceLikes.indexOf(like), 1);
		}
	}

	$scope.addLike = function(newLike){
		$scope.likes.pop();
		$scope.likes.push(newLike);
		$scope.likes.push("其它");
		$scope.choiceLikes.push(newLike);
		$scope.showLikeDiv = false;
		$scope.newLike = "";
	}

	$scope.isSelectedLike = function(like){
		return $.inArray(like, $scope.choiceLikes) != -1;
	}

	$scope.skipable = !$stateParams.requireAll;

	$scope.skip = function(){
		$location.url($stateParams.from);
	}

	$scope.sendSmsCode = function(user){
		if(isEmpty(user.mobile)){
			commonService.showWarning("请填写手机号码");
			return;
		}
		smsRestService.sendSmsCode({phone:user.mobile}).$promise.then(function(){
			commonService.showInfo("发送短信成功");
			if(!$(".getcode").hasClass("getcodehui")){
				$(".getcode").addClass("getcodehui");
				check();
			}
		});
	}

	var i = 60;
	function check() {
		if (i > 1) {
			i = i - 1;
			$(".getcode").text(i+"秒");
			setTimeout(check, 1000);
		} else {
			$(".getcode").text("获取验证码");
			$(".getcode").removeClass("getcodehui");
			i=60;
		}
	}

	$scope.choiceImage = function(imageProp){
		weixinService.wxUpload(function(result){
			$scope.user.headimgurl = result;
		}, 1);
	}

	$scope.cars = carRestService.findAll();

	$scope.saveMain = function(user){
		if(isEmpty(user.realname)){
			commonService.showWarning("请填写真实姓名");
			return;
		}
		if(isEmpty(user.mobile)){
			commonService.showWarning("请填写手机号码");
			return;
		}
		if(isEmpty(user.code)){
			commonService.showWarning("请填写验证码");
			return;
		}
		smsRestService.checkSmsCode({phone:user.mobile, code:user.code}).$promise.then(function(result){
			userRestService.updateProperty({name: "realname", value: user.realname}).$promise.then(function(){
				userRestService.updateProperty({name: "mobile", value: user.mobile}).$promise.then(function(){
					$scope.currentView = "addtion";
					$location.search('view','addtion')
				});
			});
		});
	}

	$scope.settings = {
		dateFormat: "yy-mm-dd",
		headerText: "出生年月 : {value}",
	    theme: "mobiscroll",
	    lang: "zh",
	    controls: ['calendar']
	};

	$scope.saveAddtion = function(user){
		var locationVal = $("#city-picker").val();
		var province = {name:"province", value:""};
		var city = {name:"city", value:""};
		if(!isEmpty(locationVal)){
			var flag = locationVal.indexOf(" ");
			province.value = locationVal.substring(0, flag);
			city.value = locationVal.substring(flag+1, locationVal.length);
		}
		var properties = [
		    {name: "headimgurl", value: user.headimgurl},
		    {name: "nickname", value: user.nickname},
		    {name: "birthday", value: user.birthday},
		    {name: "sex", value: user.sex},
		    province,
		    city,
		    {name: "car", value: user.car},
		    {name: "tags", value: $scope.choiceLikes.join(",")},
		];

		userRestService.updatePropertys(properties).$promise.then(function(){
			commonService.showMessage("保存成功");
			if(isEmpty($stateParams.from)){
				$location.url("/participation/list");
			}else{
				$location.url($stateParams.from);
			}

		});
	}

}).controller('commentCtrl', function($scope, $stateParams, commentRestService, articleRestService, activityRestService, commonService, weixinService) {

	$scope.condition = {
		target: $stateParams.target,
		targetId: $stateParams.targetId
	};

	$scope.dataService = commentRestService;

	if($stateParams.target == 'article'){
		articleRestService.get({id: $stateParams.targetId}).$promise.then(function(result){
			$scope.commentedObj = {name: result.title};
			weixinService.initWx(function(){
				var link = commonService.getShareLink("/article/details?id="+result.id);
				weixinService.shareConfig(result.title, "", link, result.image);
			});

		});
	}else{
		$scope.commentedObj = activityRestService.get({id: $stateParams.targetId});
	}


	$scope.saveComment = function(comment) {
		commentRestService.saveComment({target: $stateParams.target, targetId: $stateParams.targetId, content: comment}, function(result){
			$scope.comment = "";
			$scope.showCommentDiv = false;
			$scope.comments.unshift(result);
		});
	}

}).controller('articleListCtrl', function($scope, $stateParams, articleRestService, commonService, tagRestService, weixinService) {

	weixinService.initWx(function(){
		var link = commonService.getDomainUrl("/article/list");
		var image = commonService.getDomain("images/getheadimg.jpeg");
		weixinService.shareConfig("好多车友,不止玩乐", "", link, image);
	});

	$scope.condition = {
		enable: true
	};

	$scope.test = function(){
		$scope.pageInfo.page = 0;
		$scope.articles = [];
		$scope.query(function(){
			$(".cntxiala").pullToRefreshDone();
		});
	}

	$scope.dataService = articleRestService;

	$scope.tags = tagRestService.getChildTags();

	$scope.currentTag = {id:''};

	$scope.changeTag = function(tag){
		if(tag){
			$scope.condition.tagId = tag.id;
			$scope.currentTag = tag;
		}else{
			$scope.condition.tagId = null;
			$scope.currentTag = {id:''};
		}
		$scope.pageInfo.page = 0;
		$scope.articles = [];
		$scope.query(function(){
			$scope.showCategoryChoice = false;
		});
	}

	if(!isEmpty($stateParams.tag)){
		$scope.condition.tagId = $stateParams.tag;
		$scope.currentTag = {id: $stateParams.tag};;
	}

	weixinService.initWx();

}).controller('articleDetailsCtrl', function($scope, $state, $stateParams, articleRestService, commentRestService, userRestService, weixinService, commonService) {
	articleRestService.get({id: $stateParams.id}).$promise.then(function(result){
		$scope.article = result;
		weixinService.initWx(function(){
//			var link = commonService.getShareLink("/article/details?id="+result.id);
			var link = artilceLink + "/article/details?id="+result.id;
			weixinService.shareConfig(result.title, "", link, result.image);
		});
	});

	$scope.saveComment = function(comment) {
		commentRestService.saveComment({target: "article", targetId: $stateParams.id, content: comment}, function(result){
			$scope.comment = "";
			$scope.showCommentDiv = false;
			$scope.article.commentCount = $scope.article.commentCount + 1;
		});
	}

	$scope.clickCommentInput = function(){
		$scope.checkUserInfo(function(){
			$scope.showCommentDiv = true;
		});
	}

	$scope.goBack = function(){
		$state.go("app.article.list", {tag: $stateParams.tag});
	}
//TODO

}).controller('videoListCtrl', function($scope, $state, $stateParams, videoRestService, commonService, tagRestService, weixinService) {
    $scope.gotoDetails = function(id) {
        console.log($scope.pageInfo);
        $state.go('app.video.details', {id: id, page: $scope.pageInfo.page - 1});
    }

}).controller('videoListCtrl', function($scope, $stateParams, videoRestService, commonService, tagRestService, weixinService) {
	weixinService.initWx(function(){
		var link = commonService.getDomainUrl("/video/list");
		var image = commonService.getDomain("images/getheadimg.jpeg");
		weixinService.shareConfig("好多车友,不止玩乐", "", link, image);
	});
	$scope.condition = {live:false, enable: true, top:false};
	$scope.dataService = videoRestService;
    $scope.test = function(){
		$scope.pageInfo.page = 0;
		$scope.videos = [];
		$scope.query(function(){
			$(".video-list").pullToRefreshDone();
		});
	}



}).controller('videoDetailsCtrl', function($scope, $sce, $state, $stateParams, videoRestService, commentRestService, userRestService, weixinService, commonService) {
    // console.log($stateParams.page);

}).controller('videoDetailsCtrl', function($scope, $sce, $state, $stateParams, videoRestService, commentRestService, userRestService, weixinService, commonService) {

	videoRestService.get({id: $stateParams.id}).$promise.then(function(result){
		$scope.video = result;
		$scope.video.securityUrl = $sce.trustAsResourceUrl(result.url);
		weixinService.initWx(function(){
			var link = artilceLink + "/video/details?id="+result.id;
			weixinService.shareConfig(result.name, "", link, result.image);
		});
	});

	$scope.condition = {target: "video", targetId: $stateParams.id};
	$scope.dataService = commentRestService;
//	commentRestService.query({target: "video", targetId: $stateParams.id, page: 0, size: 20, sort: "createdTime,desc"}).$promise.then(function(result){
//		 $scope.comments = result.content;
//	});
	$scope.saveComment = function(comment) {
		commentRestService.saveComment({target: "video", targetId: $stateParams.id, content: comment}, function(result){
			$scope.comment = "";
			$scope.showCommentDiv = false;
			$scope.comments.unshift(result);
			$scope.video.commentCount = $scope.video.commentCount + 1;
		});
	}
	$scope.clickCommentInput = function(){
		$scope.checkLogin(function(){
			$scope.showCommentDiv = true;
		});
	}

	$scope.goBack = function(){
		$state.go("app.video.list");
	}
//TODO
}).controller('participationListCtrl', function($scope, $state, participationRestService,weixinService, commonService) {

	$scope.condition = {enable: true};

	weixinService.initWx(function(){
		var link = commonService.getDomainUrl("/participation/list");
		var image = commonService.getDomain("images/getheadimg.jpeg");
		weixinService.shareConfig("好多车友,不止玩乐", "", link, image);
	});

	$scope.types = [{name:"所有", value:""}, {name:"线下活动", value: "ACTIVITY"},{name:"线上活动", value: "ONLINE"}]

	$scope.dataService = participationRestService;

	$scope.currentType = {name:"类型", value:""};
	$scope.currentSort = "time";

	$scope.changeType = function(type){
		$scope.currentType = type;
		$scope.participations = [];
		$scope.condition.actType = type.value;
		$scope.pageInfo.page = 0;
		$scope.query(function(){
			$scope.showTypeChoice = false;
		});
	}

	$scope.sort = function(order) {
		$scope.currentSort = order;
		$scope.participations = [];
		$scope.pageInfo.page = 0;
		$scope.condition.sortType = order;
		$scope.query();
	}

	$scope.toDetailsPage = function(id, type){
		$state.go("app."+type.toLowerCase()+".details", {id: id});
	}

}).controller('activityDetailsCtrl', function($scope, $stateParams, activityRestService, activityParticipatorRestService, participatorRestService, commentRestService, userRestService, commonService, weixinService) {

	activityRestService.get({id: $stateParams.id}).$promise.then(function(result){
		$scope.activity = result;

		activityParticipatorRestService.query({activityId: $stateParams.id, page:0, size: 18, sort: "createdTime,desc"}).$promise.then(function(users){
			$scope.participators = users;
			if(users.totalElements == 0){
				console.log(result.id);
				var count = result.id % 100;
				console.log(count);
				if(count < 50) {
					count = count + 50;
				}
				$scope.participators.totalElements = count;
			}
		});

		if(result.desc.length > contentLimit) {
			$scope.desc = result.desc.substring(0,contentLimit)+"...";
			$scope.showExtender = true;
		}else{
			$scope.desc = result.desc;
		}

		$scope.activityPrice = $scope.activity.price == 0 ? "免费" : $scope.activity.price + "元"

		weixinService.initWx(function(){
			var link = commonService.getShareLink("/activity/details?id="+result.id);
			weixinService.shareConfig(result.name, "", link, result.image);
		});
	})

	$scope.extendDesc = function(){
		$scope.extended = !$scope.extended;
		if($scope.extended){
			$scope.desc = $scope.activity.desc;
		}else{
			$scope.desc = $scope.activity.desc.substring(0,contentLimit)+"...";
		}
	}

	$scope.message = "";

	participatorRestService.isParticipator({participationId: $stateParams.id}).$promise.then(function(result){
		$scope.isParticipator = result.content;
	})

	commentRestService.query({target: "activity", targetId: $stateParams.id, page: 0, size: 6, sort: "createdTime,desc"}).$promise.then(function(result){
		 $scope.comments = result.content;
	});

	$scope.enroll = function(message){
		activityParticipatorRestService.create({activityId: $stateParams.id, message: message}).$promise.then(function(userInfo){
			commonService.showMessage("报名成功");
			$scope.message = "";
			$scope.participators.totalElements = $scope.participators.totalElements + 1;
			$scope.showSignDiv = false;

			$scope.isParticipator = true;
		});
	}

	$scope.clickCommentInput = function(){
		$scope.checkLogin(function(){
			$scope.showCommentDiv = true;
		});
	}

	$scope.clickSignButton = function(){
		if($scope.activity.finish) {
			commonService.showWarning("活动已结束");
		}else{
			$scope.checkUserInfo(function(){
				$scope.showSignDiv = true;
			});
		}
	}

	$scope.viewPhoto = function(image){
		var pb1 = $.photoBrowser({
			  items: $scope.activity.images,
			  initIndex: $scope.activity.images.indexOf(image),
			  onClose: function(){
			  	$(".weui-photo-browser-modal").remove();
			  }
		});
		pb1.open();
	}


}).controller('votingDetailsCtrl', function($scope, $stateParams, votingRestService, votingParticipatorRestService, weixinService, commonService, participatorRestService) {

	votingRestService.get({id: $stateParams.id}).$promise.then(function(result){
		$scope.voting = result;
		$scope.content = result.desc;
		if(result.desc.length > contentLimit) {
			$scope.showExtender = true;
		}

		weixinService.initWx(function(){
			var link = commonService.getShareLink("/voting/details?id="+result.id);
			weixinService.shareConfig(result.name, "", link, result.image);
		});

	});

	$scope.currentContent = "desc";

	$scope.changeContent = function(attr){
		$scope.currentContent = attr;
		$scope.content = $scope.voting[attr];
	}

	$scope.condition = {votingId: $stateParams.id};

	$scope.dataService = votingParticipatorRestService;

	$scope.sort = function(order){
		$scope.participators = [];
		$scope.pageInfo.page = 0;
		$scope.pageInfo.sort = order;
		$scope.query(function(){
			$scope.showSortDiv = false;
		});
	}

	$scope.searchVotingParticipator = function(){
		$scope.participators = [];
		$scope.pageInfo.page = 0;
		$scope.query(function(){
			$scope.showSearchDiv = false;
		});
	}

	$scope.enroll = function(votingId){
		participatorRestService.isParticipator({participationId: $stateParams.id}).$promise.then(function(result){
			if(result.content){
				commonService.showWarning("您已经报过名了");
			}else{
				$scope.checkUserInfo("/voting/enroll?id="+votingId);
			}
		});
	}

	$scope.clickSearchInput = function() {
		$scope.showSearchDiv = !$scope.showSearchDiv;
		document.getElementById('searchInput').focus();
	}

}).controller('votingEnrollCtrl', function($scope, $state, $stateParams, votingParticipatorRestService, votingRestService, commonService, weixinService) {

	weixinService.initWx(function(){});

	$scope.enroll = {
		image: "images/upimg.png"
	};

	$scope.choiceImage = function(imageProp){
		weixinService.wxUpload($scope.enroll, 1, imageProp);
	}

	$scope.voting = votingRestService.get({id: $stateParams.id});

	$scope.doEnroll = function(enroll) {
		if($scope.enroll.image == "images/upimg.png" || isEmpty($scope.enroll.image)) {
			commonService.showWarning("请上传图片");
			return;
		}
		if(isEmpty($scope.enroll.message)){
			commonService.showWarning("请填写图片描述");
			return;
		}

		enroll.votingId = $stateParams.id;
		votingParticipatorRestService.create(enroll).$promise.then(function(result){
			$state.go("app.voting.enrollResult", {id: result.id})
		});
	}

}).controller('votingEnrollResultCtrl', function($scope, $state, $stateParams, $location, votingParticipatorRestService, weixinService, commonService) {

	votingParticipatorRestService.get({id: $stateParams.id}).$promise.then(function(result){
		 $scope.participator = result;
		 weixinService.initWx(function(){
			var link = commonService.getShareLink("/voting/participator?id="+result.id);
			var title = "我在参加["+$scope.participator.votingName+"]，离上一名只差一丢丢，跪求助力";
			weixinService.shareConfig(title, "", link, result.image);
		});
	});

}).controller('votingParticipatorCtrl', function($scope, $state, $location, $stateParams, commonService, votingParticipatorRestService, weixinService) {

	votingParticipatorRestService.get({id: $stateParams.id}).$promise.then(function(result){
		$scope.participator = result;
		$scope.tags = result.tags.split(",");

		weixinService.initWx(function(){
			var link = commonService.getShareLink("/voting/participator?id="+$stateParams.id);
			weixinService.shareConfig(result.votingName, "", link, result.votingImage);
		});
	});

	$scope.gotoNextParticipator = function(next){
		if(next){
			votingParticipatorRestService.getNext({id: $scope.participator.id}).$promise.then(function(result){
				if(result.id){
					$location.search("id", result.id);
				}else{
					commonService.showInfo("没有更多的参与者了");
				}
			});
		}else{
			votingParticipatorRestService.getPrev({id: $scope.participator.id}).$promise.then(function(result){
				if(result.id){
					$location.search("id", result.id);
				}else{
					commonService.showInfo("没有更多的参与者了");
				}
			});
		}
	}

	$scope.vote = function(participatorId){
		votingParticipatorRestService.getVotePermission({id: participatorId}).$promise.then(function(result){
			$scope.permission = result;
			if(result.voteCount <= 0){
				if(result.infoCompleteType == "NONE"){
					$scope.showMessage1Div = true;
				}else if(result.infoCompleteType == "REQUIRED"){
					$scope.showMessage2Div = true;
				}else if(result.infoCompleteType == "FULL"){
					$scope.showMessage3Div = true;
				}

			}else{
				votingParticipatorRestService.vote({id: participatorId}).$promise.then(function(result){
					$state.go("app.voting.voteResult");
				});
			}
		});
	}

	$scope.toUserInfoPage = function(view){
		$state.go("app.user.info", {view: view, from:$location.url()});
	}

}).controller('votingVoteResultCtrl', function($scope, $stateParams, votingParticipatorRestService, weixinService, commonService) {

	votingParticipatorRestService.get({id: $stateParams.id}).$promise.then(function(result){
		 $scope.participator = result;
		 weixinService.initWx(function(){
			var link = commonService.getShareLink("/voting/participator?id="+$stateParams.id);
			var title = "最美的不是下雨天，是为["+$scope.participator.nickname+"]投票的瞬间！";
			weixinService.shareConfig(title, "", link, $scope.participator.votingImage);
		});
	});

	$scope.rank = votingParticipatorRestService.getRank({id: $stateParams.id});

}).controller('contraryDetailsCtrl', function($scope, $state, $stateParams, contraryRestService, contraryParticipatorRestService, participatorRestService, commonService, weixinService) {

	contraryRestService.get({id: $stateParams.id}).$promise.then(function(result){
		$scope.contrary = result;
		if(result.desc.length > contentLimit) {
			$scope.desc = result.desc.substring(0,contentLimit)+"...";
			$scope.showExtender = true;
		}else{
			$scope.desc = result.desc;
		}
		weixinService.initWx(function(){
			var link = commonService.getShareLink("/contrary/details?id="+$stateParams.id);
			weixinService.shareConfig(result.name, "", link, result.image);
		});
	});

	$scope.extendDesc = function(){
		$scope.contentExtend = !$scope.contentExtend;
		if($scope.contentExtend){
			$scope.desc = $scope.contrary.desc;
		}else{
			$scope.desc = $scope.contrary.desc.substring(0,contentLimit)+"...";
		}
	}

	$scope.redParticipators = [];
	$scope.blueParticipators = [];

	$scope.pageInfo = commonService.getDefaultPageSetting();

	var scrollable = true;
	var toBottom = false;

	$scope.query = function(callback) {
		scrollable = false;
		if(typeof $scope.condition === 'undefined'){
			$scope.condition = {};
		}
		var condition = commonService.buildPageCondition($scope.condition, $scope.pageInfo);
		condition.contraryId = $stateParams.id;
		contraryParticipatorRestService.query(condition).$promise.then(function(data){
			if(data.red.content.length > 0 || data.blue.content.length > 0){
				$scope.redParticipators = $scope.redParticipators.concat(data.red.content);
				$scope.blueParticipators = $scope.blueParticipators.concat(data.blue.content);
				if(data.red.content.length >= $scope.pageInfo.size || data.blue.content.length >= $scope.pageInfo.size){
					scrollable = true;
				}else{
					toBottom = true;
				}
			}else{
				toBottom = true;
			}
			if(typeof callback == "function"){
				callback();
			}

		});
	}

	$scope.query();

	$scope.getNextPage = function() {
		if(scrollable && !toBottom){
			scrollable = false;
			if($scope.redParticipators.length != 0 || $scope.blueParticipators.length != 0){
				scope.pageInfo.page = scope.pageInfo.page + 1;
				scope.query();
			}
		}
	}

	$scope.participator = {
		contraryId: $stateParams.id,
		content: "",
		red: false
	}

	$scope.clickSignButton = function(red){
		if($scope.contrary.finish) {
			commonService.showWarning("活动已结束");
		}else{
//			$scope.checkUserInfo(function(){
				participatorRestService.isParticipator({participationId: $stateParams.id}).$promise.then(function(result){
					if(result.content){
						commonService.showWarning("您已经投过票了");
					}else{
						$scope.participator.red = red;
						$scope.showVoteDiv = true;
						if(red){
							$scope.currentButton = $scope.contrary.redButton;
						}else{
							$scope.currentButton = $scope.contrary.blueButton;
						}
					}
				});
//			});
		}
	}

	$scope.enroll = function(participator){
		contraryParticipatorRestService.create($scope.participator).$promise.then(function(result){
			$state.go("app.contrary.result", {id: result.id});
		});
	}

}).controller('contraryResultCtrl', function($scope, $stateParams, contraryParticipatorRestService, weixinService, commonService) {

	contraryParticipatorRestService.get({id: $stateParams.id}).$promise.then(function(result){
		$scope.participator = result;
		weixinService.initWx(function(){
			var title = result.nickname+"是第"+result.indexNumber+"位["+result.viewpoint+"]的支持者";
			var link = commonService.getShareLink("/contrary/details?id="+result.contraryId);
			weixinService.shareConfig(title, "", link, result.contraryImage);
		});
	});

}).controller('lotteryDetailsCtrl', function($scope, $state, $stateParams, $location, lotteryRestService, lotteryParticipatorRestService, userRestService, commonService, weixinService) {

	$scope.view = "info";

	userRestService.current().$promise.then(function(resultUser){
		if(isEmpty(resultUser.realname) || isEmpty(resultUser.mobile)){
			$scope.showInfo = true;
		}else{
			$scope.showInfo = false;
		}
	});

	if(typeof $stateParams.view != "undefined") {
		$scope.view = $stateParams.view;
	}

	$scope.extendDescFunc = function(){
		$scope.expendDesc = !$scope.expendDesc;
		if($scope.expendDesc){
			$scope.desc = $scope.lottery.desc;
		}else{
			$scope.desc = $scope.lottery.desc.substring(0,contentLimit)+"...";
		}
	}

	$scope.extendRuleFunc = function(){
		$scope.expendRule = !$scope.expendRule;
		if($scope.expendRule){
			$scope.rule = $scope.lottery.rule;
		}else{
			$scope.rule = $scope.lottery.rule.substring(0,contentLimit)+"...";
		}
	}

	$scope.extendGiftFunc = function(){
		$scope.expendGift = !$scope.expendGift;
		if($scope.expendGift){
			$scope.gifts = $scope.lottery.gifts;
		}else{
			$scope.gifts = $scope.lottery.gifts.substring(0,contentLimit)+"...";
		}
	}

	$scope.join = function(){

//		$scope.checkUserInfo(function(){
			// lotteryParticipatorRestService.getLotteryPermission({id: $stateParams.id}).$promise.then(function(result){
			// 	$scope.permission = result;
			// 	if(result.win){
			//
			// 		var link = commonService.getShareLink("/lottery/details?id="+$scope.lottery.id);
			// 		weixinService.shareConfig("我抽中了让我奋不顾身的["+result.prize+"]，比我高的请走开！", "", link, $scope.lottery.image);
			//
			// 		userRestService.current().$promise.then(function(result){
			// 			if(isEmpty(result.realname) || isEmpty(result.mobile)){
			// 				$state.go("app.user.info", {from: "/lottery/details?id="+$scope.lottery.id+"&view=success"});
			// 			}else{
			// 				commonService.showInfo("您已经抽中过奖品了，请联系客服领奖")
			// 				$location.search("view", "success");
			// 				$scope.view = "success";
			// 			}
			// 		});
			//
			// 	}else{
			// 		if(result.count <= 0){
			//
			// 			var link = commonService.getShareLink("/lottery/details?id="+$scope.lottery.id);
			// 			weixinService.shareConfig("我在玩["+$scope.lottery.name+"]，你也来试试手气吧！", "", link, $scope.lottery.image);
			//
			// 			$location.search("view", "notPermission");
			// 			$scope.view = "notPermission";
			//
			// 		}else{
						$location.search("view", "lottery");
						$scope.view = "lottery";
			// 		}
			// 	}
			// });
//		});
	}

	$scope.award = function(success) {
		if(success){
			userRestService.current().$promise.then(function(result){
				if(isEmpty(result.realname) || isEmpty(result.mobile)){
					$state.go("app.user.info", {from: "/lottery/details?id="+$scope.lottery.id+"&view=success"});
				}else{
					$location.search("view", "success");
					$scope.view = "success";
				}
			});
		}else{
			$location.search("view", "lottery");
			$scope.view = "lottery";
		}
		$(".huojiang").hide();
		$(".nohuojiang").hide();
	}

}).controller('leaderListCtrl', function($scope, $location, leaderRestService, weixinService) {

	weixinService.initWx(function(){
		var link = commonService.getDomainUrl("/leader/list");
		var image = commonService.getDomain("images/getheadimg.jpeg");
		weixinService.shareConfig("好多车友,不止玩乐", "", link, image);
	});

	$scope.condition = {
		status: "APPROVE"
	}

	$scope.gotoApplyPage = function(){
		$scope.checkUserInfo("/leader/apply");
	}

	$scope.dataService = leaderRestService;

}).controller('leaderApplyCtrl', function($scope, $state, leaderRestService, weixinService) {

	$scope.apply = function(leader){
		leader.top = false;
		leaderRestService.create(leader).$promise.then(function(result){
			$scope.showTipDiv = true;

		});
	}

	$scope.iKnow = function(){
		$state.go("app.leader.list");
	}

}).controller('leaderDetailsCtrl', function($scope, $state, $stateParams, leaderRestService, participatorRestService, weixinService) {

	weixinService.initWx(function(){
		var link = commonService.getDomainUrl("/leader/list");
		var image = commonService.getDomain("images/getheadimg.jpeg");
		weixinService.shareConfig("好多车友,不止玩乐", "", link, image);
	});

	$scope.condition = {
		userId: $stateParams.userId
	};

	$scope.leader = leaderRestService.get({id: $stateParams.id});

	$scope.dataService = participatorRestService;

	$scope.toDetailsPage = function(id, type){
		$state.go("app."+type.toLowerCase()+".details", {id: id});
	}

}).controller('myMainCtrl', function($scope, userRestService, weixinService) {

	weixinService.initWx(function(){
		var link = commonService.getDomainUrl("/my/list");
		var image = commonService.getDomain("images/getheadimg.jpeg");
		weixinService.shareConfig("好多车友,不止玩乐", "", link, image);
	});

}).controller('myListCtrl', function($scope, userRestService) {

	$scope.user = userRestService.current();

}).controller('myInfoCtrl', function($scope, $state, userRestService, carRestService, commonService, weixinService, paramRestService) {

	weixinService.initWx();

	$scope.clickLike = function(like) {
		if($.inArray(like, $scope.choiceLikes) == -1){
			if($scope.choiceLikes.length < 4){
				if(like == "其它"){
					$scope.showTagDiv = false;
					$scope.showLikeDiv = true;
				}else{
					$scope.choiceLikes.push(like);
				}
			}else{
				commonService.showWarning("最多只能选择4个喜好");
			}
		}else{
			$scope.choiceLikes.splice($scope.choiceLikes.indexOf(like), 1);
		}

		$scope.user.tags = $scope.choiceLikes.join(",");
	}

	$scope.addLike = function(newLike){
		$scope.likes.pop();
		$scope.likes.push(newLike);
		$scope.likes.push("其它");
		$scope.choiceLikes.push(newLike);
		$scope.showLikeDiv = false;
		$scope.showTagDiv = true;
		$scope.newLike = "";
	}

	$scope.isSelectedLike = function(like){
		return $.inArray(like, $scope.choiceLikes) != -1;
	}

	userRestService.current().$promise.then(function(result){
		$scope.user = result;
		$scope.user.birthday = new Date(result.birthday);

		if(isEmpty($scope.user.tags)){
			$scope.choiceLikes = [];
		}else{
			$scope.choiceLikes = $scope.user.tags.split(",");
		}

		if($scope.choiceLikes.length == 1 && isEmpty($scope.choiceLikes[0])){
			$scope.choiceLikes = [];
		}

		console.log($scope.choiceLikes);

		paramRestService.getParam({code: "hdcyLikes"}).$promise.then(function(result){
			$scope.likes = result.value.split(',');
			for (var i = 0; i < $scope.choiceLikes.length; i++) {
				if($.inArray($scope.choiceLikes[i], $scope.likes) == -1){
					$scope.likes.push($scope.choiceLikes[i]);
				}
			}
			$scope.likes.push("其它");
		});

		$scope.isRealnameReadonly = function() {
			return !isEmpty($scope.user.realname);
		}

		$scope.isSexReadonly = function() {
			return $scope.user.sex != "0";
		}
	});

	$scope.choiceImage = function(imageProp){
		weixinService.wxUpload(function(result){
			$scope.user.headimgurl = result;
		}, 1, imageProp);
	}

	$scope.cars = carRestService.findAll();

	$scope.settings = {
		dateFormat: "yy-mm-dd",
		headerText: "出生年月 : {value}",
        theme: "mobiscroll",
        lang: "zh",
        controls: ['calendar']
    };

	$scope.sexs = [
	    {name:"未知", value:"0"},
        {name:"男", value:"1"},
        {name:"女", value:"2"}
	];

	$scope.changeMobile = function(){
		$state.go("app.my.mobile");
	}

	$scope.save = function(user){
		var locationVal = $("#city-picker").val();
		var province = {name:"province", value:""};
		var city = {name:"city", value:""};
		if(!isEmpty(locationVal)){
			var flag = locationVal.indexOf(" ");
			province.value = locationVal.substring(0, flag);
			city.value = locationVal.substring(flag+1, locationVal.length);
		}
		var properties = [
		    {name: "headimgurl", value: user.headimgurl},
		    {name: "nickname", value: user.nickname},
		    {name: "realname", value: user.realname},
		    {name: "birthday", value: user.birthday},
		    {name: "sex", value: user.sex},
		    {name: "mobile", value: user.mobile},
		    province,
		    city,
		    {name: "car", value: user.car},
		    {name: "tags", value: user.tags},
		];

		userRestService.updatePropertys(properties).$promise.then(function(){
			commonService.showMessage("保存成功");
		});

	}

}).controller('myParticipationCtrl', function($scope, $state, participatorRestService) {

	$scope.dataService = participatorRestService;

	$scope.toDetailsPage = function(id, type){
		$state.go("app."+type.toLowerCase()+".details", {id: id});
	}

}).controller('myMobileCtrl', function($scope, smsRestService, $state, commonService, userRestService) {

	$scope.user = {};

	$scope.sendSmsCode = function(user){
		if(isEmpty(user.newMobile)){
			commonService.showWarning("请填写新手机号码");
			return;
		}
		smsRestService.sendSmsCode({phone:user.newMobile}).$promise.then(function(){
			commonService.showInf("发送短信成功");
		});
	}

	$scope.updateMobile = function(user){
		if(isEmpty(user.oldMobile)){
			commonService.showWarning("请填写原手机号码");
			return;
		}
		if(isEmpty(user.newMobile)){
			commonService.showWarning("请填写新手机号码");
			return;
		}
		if(isEmpty(user.code)){
			commonService.showWarning("请填写验证码");
			return;
		}
		smsRestService.checkSmsCode({phone:user.newMobile, code:user.code}).$promise.then(function(result){
			userRestService.updateMobile(user).$promise.then(function(){
				$state.go("app.my.info");
			});
		});
	}

}).controller('myAboutCtrl', function($scope, commonService) {

	$scope.downloadApp = function(){
		commonService.showInfo("即将推出,敬请期待");
	}

}).controller('giftListCtrl', function($scope, giftRestService) {

	$scope.dataService = giftRestService;

	$scope.currentSort = {name:"礼品热度", value: "used,desc"};

	$scope.tags = [
        {name:"礼品热度", value: "used,desc"},
        {name:"所需积分", value: "point,asc"},
        {name:"剩余数量", value: "stock,asc"}
	];

	$scope.sort = function(order) {
		$scope.currentSort = order;
		$scope.gifts = [];
		$scope.pageInfo.sort = order.value;
		$scope.query(function(){
			$scope.showFilterDiv = false;
		});
	}

}).controller('giftDetailsCtrl', function($scope, commonService) {

	$scope.exchange = function(){
		commonService.showWarning("积分不足");
	}

}).controller('agreementCtrl', function($scope) {

}).service("articleRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("article/:id", {id:"@id"}, config);
}).service("videoRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("video/:id", {id:"@id"}, config);
}).service("participationRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("participation/:id", {id:"@id"}, config);
}).service("activityRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("activity/:id", {id:"@id"}, config);
}).service("activityParticipatorRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("activityParticipator/:id", {id:"@id"}, config);
}).service("votingRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("voting/:id", {id:"@id"}, config);
}).service("votingParticipatorRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.vote = {url: "votingParticipator/vote", method: "POST" };
	config.getVotePermission = {url: "votingParticipator/:id/vote", method: "GET" };
	config.getRank = {url: "votingParticipator/:id/rank", method: "GET" };
	config.getNext = {url: "votingParticipator/:id/next", method: "GET" };
	config.getPrev = {url: "votingParticipator/:id/prev", method: "GET" };
	return $resource("votingParticipator/:id", {id:"@id"}, config);
}).service("contraryRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("contrary/:id", {id:"@id"}, config);
}).service("contraryParticipatorRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("contraryParticipator/:id", {id:"@id"}, config);
}).service("leaderRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("leader/:id", {id:"@id"}, config);
}).service("participatorRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.isParticipator = {url: "participator/member", method: "GET"};
	return $resource("participator/:id", {id:"@id"}, config);
}).service("giftRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	return $resource("gift/:id", {id:"@id"}, config);
}).service("carRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.findAll = {url: "car/all", method: "GET", isArray: true};
	return $resource("car/:id", {id:"@id"}, config);
}).service("lotteryRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.lottery = {url:"lottery/lottery", method: "POST"};
	return $resource("lottery/:id", {id:"@id"}, config);
}).service("lotteryParticipatorRestService", function($resource, commonService){
	var config = commonService.getDefaultRestSetting();
	config.getLotteryPermission = {url: "lottery/:id/permission", method: "GET" };
	return $resource("lotteryParticipator/:id", {id:"@id"}, config);
}).filter("hdcyArticleDate", function(){
	return function (date, postfix) {

		var value = new Date().getTime() - new Date(date).getTime();

		if(value < 0) {
			value = new Date(date).getTime() - new Date().getTime();
		}

		var secondMil = 1000;
		var minuteMil = secondMil*60;
		var hourMil = minuteMil*60;
		var dayMil = hourMil*24;
		var weekMil = dayMil*7;
		var monthMil = dayMil*30;
		var yearMil = dayMil*365;

		var year= Math.floor(value/yearMil);
		var month=Math.floor(value/monthMil);
		var week=Math.floor(value/weekMil);
		var day=Math.floor(value/dayMil);
		var hour=Math.floor(value/hourMil);
		var min=Math.floor(value/minuteMil);
		var s=Math.floor(value/secondMil);

		if(day == 0) {
			return "今天"
		}else if(day == 1) {
			return "昨天"
		}else if(day == 2) {
			return "前天"
		}else{
			if(date == null) {
				return "";
			}else{
				return new Date(date).format('yyyy-MM-dd');
			}
		}

    }
}).filter("hdcyCommentDate", function(){
	return function (date, postfix) {

		var value = new Date().getTime() - new Date(date).getTime();

		if(value < 0) {
			value = new Date(date).getTime() - new Date().getTime();
		}

		var secondMil = 1000;
		var minuteMil = secondMil*60;
		var hourMil = minuteMil*60;
		var dayMil = hourMil*24;
		var weekMil = dayMil*7;
		var monthMil = dayMil*30;
		var yearMil = dayMil*365;

		var year= Math.floor(value/yearMil);
		var month=Math.floor(value/monthMil);
		var week=Math.floor(value/weekMil);
		var day=Math.floor(value/dayMil);
		var hour=Math.floor(value/hourMil);
		var min=Math.floor(value/minuteMil);
		var s=Math.floor(value/secondMil);

		var result = "";
		if(year > 0){
			result=year+"年";
		}else if(month > 0){
			result=month+"月";
		}else if(week > 0){
			result=week+"周";
		}else if(day > 0){
			result=day+"天";
		}else if(hour > 0 ) {
			if(hour > 8){
				result="1天";
			}else{
				result=hour+"小时";
			}
		}else if(min > 0 ){
			if(min > 10){
				result="1小时";
			}else{
				return "刚刚";
			}
		}else{
			return "刚刚";
		}
		return result + (postfix?postfix:"前");

    }
}).directive('hdcySwiper', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	var mySwiper = new Swiper('.swiper-container', {
        		prevButton: '.swiper-button-prev',
        		nextButton: '.swiper-button-next',
        	});
        }
      }
}).directive('mirageSwiper', function(videoRestService){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

        	videoRestService.query({top: true, enable: true}).$promise.then(function(result){

        		var swipers = result.content;
        		var wrapper = $('<div class="swiper-wrapper"></div>');
        		for (var i = 0; i < swipers.length; i++) {
        			if(swipers[i].live){
        				var swiper = $('<div class="swiper-slide"><a href="'+swipers[i].url+'"><img src="'+swipers[i].image+'" /><span class="videoName">'+swipers[i].name+'</span></a></div>');
        			}else{
        				var swiper = $('<div class="swiper-slide"><a href="#/video/details?id='+swipers[i].id+'"><img src="'+swipers[i].image+'" /><span class="videoName">'+swipers[i].name+'</span></a></div>');
        			}

					wrapper.append(swiper);
				}

        		var pager = $('<div class="swiper-pagination"></div>');
        		element.append(wrapper);
            	element.append(pager);

                var lunboW=$(".daka-img .swiper-slide img").width()
                $(".daka-img .swiper-slide img").height(lunboW*0.6667);




            	Swiper('.swiper-container', {
            	    pagination: '.swiper-pagination',
            	    paginationClickable: true,
            	    autoplay : 5000,
            		centeredSlides: true,
            	    slidesPerView: 1.1,
            	    watchSlidesProgress : true,
            	    watchSlidesVisibility : true,
            	    watchActiveIndex: true,
            	});
        	});

        }
      }
}).directive('giftSwiper', function($stateParams, giftRestService){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	giftRestService.get({id: $stateParams.id}).$promise.then(function(result){
        		scope.gift = result;

        		var swipers = result.images;

                var wrapper = $('<div class="swiper-wrapper"></div>');
                for (var i = 0; i < swipers.length; i++) {
					var swiper = $('<div class="swiper-slide"><img src="'+swipers[i]+'"  /></div>');
					wrapper.append(swiper);
				}

        		var pager = $('<div class="swiper-pagination"></div>');
        		element.append(wrapper);
            	element.append(pager);

            	var swiper = new Swiper('.swiper-container', {
            	    pagination: '.swiper-pagination',
            	    paginationClickable: true,
            	    autoplay : 3000,
            	});
        	});
        }
      }
}).directive('cityPicker', function(userRestService){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	userRestService.current().$promise.then(function(result){
        		element.attr("value", result.province + " " + result.city);
            	element.cityPicker({
       		 		showDistrict: false
            	});
        	});
        }
    }
}).directive('autoSelect', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        	element.focus(function(){
        		this.select();
        	});
        }
      }
}).directive('leaderSwiper', function(leaderRestService){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

        	leaderRestService.query({status:"APPROVE", top: true, sort: "topIndex,asc", page:0, size: 10}).$promise.then(function(result){

        		var swipers = result.content;
        		var wrapper = $('<div class="swiper-wrapper"></div>');
        		for (var i = 0; i < swipers.length; i++) {
					var swiper = $('<div class="swiper-slide"><a href="#/leader/details?id='+swipers[i].id+'&userId='+swipers[i].userId+'"><img src="'+swipers[i].topImage+'"  /></a></div>');
					wrapper.append(swiper);
				}

        		var pager = $('<div class="swiper-pagination"></div>');
        		element.append(wrapper);
            	element.append(pager);


            	Swiper('.swiper-container', {
            	    pagination: '.swiper-pagination',
            	    paginationClickable: true,
            	    autoplay : 5000,
            	});
        	});
        }
      }
}).directive('hdcyLottery', function($stateParams, $location, lotteryRestService, lotteryParticipatorRestService, commonService, weixinService) {

	return {
		restrict : 'A',

		link : function(scope, element, attrs) {

			lotteryRestService.get({id: $stateParams.id}).$promise.then(function(result){

				scope.lottery = result;

				if(result.desc.length > contentLimit) {
					scope.desc = result.desc.substring(0,contentLimit)+"...";
					scope.showDescExtender = true;
				}else{
					scope.desc = result.desc;
				}

				if(result.rule.length > contentLimit) {
					scope.rule = result.rule.substring(0,contentLimit)+"...";
					scope.showRuleExtender = true;
				}else{
					scope.rule = result.rule;
				}

				if(result.gifts.length > contentLimit) {
					scope.gifts = result.gifts.substring(0,contentLimit)+"...";
					scope.showGiftExtender = true;
				}else{
					scope.gifts = result.gifts;
				}

				if("success" != $stateParams.view && "notPermission" != $stateParams.view){
					console.log("default share");
					weixinService.initWx(function(){
						var link = commonService.getShareLink("/lottery/details?id="+result.id);
						weixinService.shareConfig(result.name, "", link, result.image);
					});
				}


				var turnplate={
						restaraunts:[],				//大转盘奖品名称
						colors:[],					//大转盘奖品区块对应背景颜色
						outsideRadius:192,			//大转盘外圆的半径
						textRadius:155,				//大转盘奖品位置距离圆心的距离
						insideRadius:68,			//大转盘内圆的半径
						startAngle:0,				//开始角度

						bRotate:false				//false:停止;ture:旋转
				};

				turnplate.restaraunts = result.prizes;
				turnplate.colors = result.colors;
				turnplate.imgurl = ["images/cj-04.png", "images/cj-05.png", "images/cj-06.png", "images/cj-01.png","images/cj-02.png", "images/cj-03.png"];

				var rotateTimeOut = function (){
					$('#wheelcanvas').rotate({
						angle:0,
						animateTo:2160,
						duration:8000,
						callback:function (){
							alert('网络超时，请检查您的网络设置！');
						}
					});
				};

				//旋转转盘 item:奖品位置; txt：提示语;
				var rotateFn = function (item, txt, id, win){
					var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
					if(angles<270){
						angles = 270 - angles;
					}else{
						angles = 360 - angles + 270;
					}
					$('#wheelcanvas').stopRotate();
					$('#wheelcanvas').rotate({
						angle:0,
						animateTo:angles+1800,
						duration:8000,
						callback:function (){
							// lotteryRestService.save({id: id, prize: txt}).$promise.then(function(){
							// 	if(win){
									$(".huojiang p").text(txt);
									$(".huojiang").show();

								// 	var link = commonService.getShareLink("/lottery/details?id="+scope.lottery.id);
								// 	weixinService.shareConfig("我抽中了让我奋不顾身的["+txt+"]，比我高的请走开！", "", link, scope.lottery.image);
                                //
								// }else{
								// 	$(".nohuojiang").show();
								// }
								turnplate.bRotate = !turnplate.bRotate;
							// })
						}
					});
				};

				element.after('<img class="pointer" src="images/turnplate-pointer.png"/>');

				$('.pointer').click(function (){
					if(turnplate.bRotate)return;

					// lotteryParticipatorRestService.getLotteryPermission({id: $stateParams.id}).$promise.then(function(result){
                    //
					// 	if(result.win){
					// 		commonService.showInfo("您已经抽中过奖品了，请联系客服领奖")
					// 		$location.search("view", "success");
					// 		scope.view = "success";
					// 	}else{
					// 		if(result.count <= 0){
					// 			$location.search("view", "notPermission");
					// 			scope.view = "notPermission";
					// 		}else{
					// 			lotteryRestService.create({lotteryId: $stateParams.id}).$promise.then(function(info){
									turnplate.bRotate = !turnplate.bRotate;
									//获取随机数(奖品个数范围内)
									// lotteryRestService.lottery({id: $stateParams.id}).$promise.then(function(result){
										var item = 0;
										rotateFn(item+1, turnplate.restaraunts[item].name, 0, turnplate.restaraunts[item].win);
				// 					});
				// 				});
				// 			}
				// 		}
				// 	});
				});
				turnplate.imgurl = ["images/cj-01.png","images/cj-02.png","images/cj-03.png","images/cj-04.png","images/cj-05.png","images/cj-06.png","images/cj-02.png"];
				var loaded = 0;
				for (var i = 0; i < turnplate.imgurl.length; i++) {
					var img = new Image();
					img.src=turnplate.imgurl[i];
					img.onload = (function(a) {
						return function(){
							loaded++;
							img=this;
//							if(loaded==turnplate.imgurl.length){
//								drawRouletteWheel();
//							}
							drawRouletteWheel();

						}
					})(i)
				}
				/*var loaded = 0;
				for (var i = 0; i < turnplate.imgurl.length; i++) {
					var img = new Image();
					img.onload = function() {
						loaded++;
						if(loaded==turnplate.imgurl.length){
							drawRouletteWheel();
						}
					}
					img.src = turnplate.imgurl[i];
				}*/

			function drawRouletteWheel() {
				console.log(img)
				var canvas = document.getElementById("wheelcanvas");
				if (canvas.getContext) {
					  //根据奖品个数计算圆周角度
					  var arc = Math.PI / (turnplate.restaraunts.length/2);
					  var ctx = canvas.getContext("2d");
					  //在给定矩形内清空一个矩形
					  ctx.clearRect(0,0,422,422);
					  //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
					  ctx.strokeStyle = "#FFBE04";
					  //font 属性设置或返回画布上文本内容的当前字体属性
					  ctx.font = '16px Microsoft YaHei';
					  for(var i = 0; i < turnplate.restaraunts.length; i++) {
						  var angle = turnplate.startAngle + i * arc;
						  ctx.fillStyle = turnplate.colors[i];
						  ctx.beginPath();
						  //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
						  ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
						  ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
						  ctx.stroke();
						  ctx.fill();
						  //锁画布(为了保存之前的画布状态)
						  ctx.save();

						  //----绘制奖品开始----
						  ctx.fillStyle = "#FFFFFF";
						  var text = turnplate.restaraunts[i].name;
						  var line_height = 17;
						  //translate方法重新映射画布上的 (0,0) 位置
						  ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);

						  //rotate方法旋转当前的绘图
						  ctx.rotate(angle + arc / 2 + Math.PI / 2);

						 /* var img=new Image();
						  img.src=turnplate.imgurl[i];*/
						  //ctx.drawImage(img,-28,10);
						  ctx.fillText(text, -ctx.measureText(text).width / 2, 0);

						  //把当前画布返回（调整）到上一个save()状态之前
						  ctx.restore();
						  //----绘制奖品结束----
					  }
				  }
				}
			});
		}
	}
});
