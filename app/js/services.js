'use strict';

/* Services */
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('MyPhone', ['$resource', function($resource) {
	return $resource('phones/:phoneId');
}]);