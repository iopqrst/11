var app = angular.module('app',[]);

app.controller('MyController', ['$scope', function($scope) {
	$scope.clock = {
		now: new Date()
	};
	var updateClock = function() {
		$scope.clock.now = new Date();
	};
	setInterval(function() {
		$scope.$apply(updateClock);
		
	}, 1000);
	updateClock();
}]);