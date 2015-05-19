'use strict';

/* Services */
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
	function($resource) {
		return $resource('phones/:phoneId.json', {}, {
			query: {
				method: 'GET',
				params: {
					phoneId: 'phones-list'
				},
				isArray: true
			}
		});
	}
]);

phonecatServices.factory('MyPhone', ['$resource',
	function($resource) {
		return $resource('phones/:phoneId');
	}
]);