'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description # testApp
 * 
 * Main module of the application.
 */
// 应用主模块
angular.module(
		'adminApp',
		[ 'admin',
		// 'voteAdminModule',
		'lotteryAdminModule', 'userAdminModule', 'buttonAdminModule','weixinReplyAdminModule','paramAdminModule',
				'tagAdminModule', 'activityAdminModule', 'votingAdminModule', 'signtempAdminModule',
				'contraryAdminModule', 'leaderAdminModule', 'giftAdminModule', 'showAdminModule',
				'carAdminModule', 'posterAdminModule', 'articleAdminModule', 'waiterAdminModule', 'umeditorModule',
				'commentAdminModule', 'videoAdminModule','sponsorAdminModule','yr' ])
.filter("enable", function() {
	return function(text) {
		if (text) {
			return "下线";
		}
		return "上线";
	}
});
