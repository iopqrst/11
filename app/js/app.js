'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatAnimations', 'phonecatControllers', 'phonecatFilters', 'phonecatServices']);

phonecatApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/phones', {
			templateUrl: 'partials/phone-list.html',
			controller: 'MyPhoneListCtrl'
		}).
		when('/phones/:phoneId', {
			templateUrl: 'partials/phone-detail.html',
			controller: 'MyPhoneDetailCtrl'
		}).
		otherwise({
			redirectTo: '/phones'
		});
	}
]);