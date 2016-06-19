'use strict';

var app = angular.module('com.ngnice.app')

// 验证数据格式
app.filter('error', ['SystemData', function(sd){
	return function (input, customMessages) {
		
		// 类似jquery的extend，使用customMessages覆盖sd.errorMessages中的数据
		
		var errors = angular.extend({}, sd.errorMessages, customMessages);
		console.info (errors);
		
		return errors[input] || input;
	}
}]);
