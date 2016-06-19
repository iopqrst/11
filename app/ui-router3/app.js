'use strict';

var app = angular.module('com.ngnice.app', ['ui.router']);

app.controller('LayoutFooterController', function() {
	var vm = this;
});

app.controller('LayoutHeaderController', function LayoutHeaderController() {
	var vm = this;
});

app.controller('LayoutMenuController', function LayoutMenuController() {
	var vm = this;
});

app.controller('HomeIndexController', function() {
	var vm = this;

	vm.name = 'world';
});

app.controller('HomeNotFoundController', function() {
	var vm = this;
});

app.controller('ReaderCreateController', function() {
	var vm = this;
	
	vm.submit = function(formEles) {
		console.info(formEles);
	}
});

app.controller('AppLayoutController', function AppLayoutController() {
	var vm = this;
});

app.controller('ReaderListController', ['SystemData', function(sd) {
	var vm = this;
	vm.items = sd.users;
}]);

//文章
app.controller('ThreadListController', ['SystemData',function ThreadListController(sd) {
	var vm = this;
	
	vm.threads = sd.threads;
}]);

app.controller('ThreadShowController', ['$stateParams','SystemData', function ThreadShowController($stateParams,sd) {
	var vm = this;
	
	var id = $stateParams.id;
	var param1 = $stateParams.param1;
	var param2 = $stateParams.param2;
	
	console.info ($stateParams);
	
	for(var i = 0; i <= sd.threads.length - 1 ; i++) {
		
		if( sd.threads[i].id == $stateParams.id) {
			vm.thread = sd.threads[i];
			break;
		}
		
	}
}]);