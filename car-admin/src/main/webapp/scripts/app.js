'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description # testApp
 * 
 * Main module of the application.
 */
// 应用主模块
angular.module('adminApp', [ 'admin',
// 'voteAdminModule',
'lotteryAdminModule', 'userAdminModule', 'buttonAdminModule', 'tagAdminModule',
		'activityAdminModule', 'votingAdminModule', 'contraryAdminModule',
		'leaderAdminModule', 'giftAdminModule', 'carAdminModule',
		'posterAdminModule', 'articleAdminModule', 'commentAdminModule', 'yr' ]);
