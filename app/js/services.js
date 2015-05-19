'use strict';

/* Services */
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
	function($resource) {
		return $resource('phones/:phoneId', {}, {
			query: {
				method: 'GET',
				params: {
					phoneId2: 'phones'
				},
				isArray: true
			}
		});
	}
]);