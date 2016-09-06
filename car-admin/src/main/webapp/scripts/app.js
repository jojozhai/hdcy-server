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
		'lotteryAdminModule', 'userAdminModule', 'buttonAdminModule',
				'tagAdminModule', 'activityAdminModule', 'votingAdminModule',
				'contraryAdminModule', 'leaderAdminModule', 'giftAdminModule',
				'carAdminModule', 'posterAdminModule', 'articleAdminModule',
				'commentAdminModule', 'videoAdminModule','yr' ])
.service("sponsorRestService",function($resource) {
	return $resource("sponsor");
}).service("customerServiceService", function($resource) {
	return $resource("customerService");
}).filter("enable", function() {
	return function(text) {
		if (text) {
			return "下线";
		}
		return "上线";
	}
});
;
