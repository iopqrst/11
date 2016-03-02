'use strict';

/* Filters */
angular.module('phonecatFilters', []).filter('phonecatFilters', function() {
	return function(input) {
		return input ? '\u2713' : '\u2718';
	}
});