'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

//phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//	function($scope, Phone) {
//		$scope.phones = Phone.query();
//		$scope.orderProp = 'age';
//	}
//]);

phonecatControllers.controller('MyPhoneListCtrl', ['$scope', 'MyPhone',
	function($scope, MyPhone) {
		MyPhone.query({
			phoneId: 'phones-list.json'
		}, function(_phones) {
			console.info('phones size = ' + _phones.length);
			$scope.phones = _phones;
		});
		$scope.orderProp = 'age';
	}
]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//	function($scope, $routeParams, Phone) {
//		
//		console.info ("$ = " + $routeParams.phoneId);
//		
//		$scope.phone = Phone.get({
//			phoneId: $routeParams.phoneId
//		}, function(phone) {
//			console.info("phone ---> " + JSON.stringify(phone));
//			$scope.mainImageUrl = phone.images[0];
//		});
//
//		$scope.setImage = function(imageUrl) {
//			$scope.mainImageUrl = imageUrl;
//		}
//	}
//]);

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