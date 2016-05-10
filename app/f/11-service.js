var app = angular.module('UserService', []);

app.factory('UserManager', function() {
	
	var user = {
		name: " Angular js ~~~~~ "
	};
	
	console.info (user.name);
	
	return user;
});