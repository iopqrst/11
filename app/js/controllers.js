'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('MyPhoneListCtrl', ['$scope', 'MyPhone',
	function($scope, MyPhone) {
		MyPhone.query({
			phoneId: 'phones-list.json'
		}, function(phones) {
			console.info('phones size = ' + phones.length);
			$scope.phones = phones;
		});
		$scope.orderProp = 'age';
	}
]);

phonecatControllers.controller('MyPhoneDetailCtrl', ['$scope', '$routeParams', 'MyPhone',
	function($scope, $routeParams, MyPhone) {
		$scope.phone = MyPhone.get({
			phoneId: $routeParams.phoneId + '.json'
		}, function(phone) {
			console.info("phone ---> " + JSON.stringify(phone));
			$scope.mainImageUrl = phone.images[0];
		});

		$scope.setImage = function(imageUrl) {
			$scope.mainImageUrl = imageUrl;
		}
	}
]);