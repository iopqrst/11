'use strict';

var app = angular.module('com.ngnice.app', ['ui.router']);

// settings app router
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('default', {
		url: '',
		templateUrl: 'home/index.html',
		controller: 'HomeIndexController as vm'
	});

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'home/index.html',
		controller: 'HomeIndexController as vm'
	});

	$stateProvider.state('notFound', {
		url: '/notFound',
		templateUrl: 'home/notFound.html',
		controller: 'HomeNotFoundController as vm'
	});

	$urlRouterProvider.otherwise('/notFound');

	$stateProvider.state('reader', {
		url: '/reader',
		template: '<div ui-view style="border:1px solid green"></div>',
		abstract: true
	});

	$stateProvider.state('reader.create', {
		url: '/create',
		templateUrl: 'reader/create.html',
		controller: 'ReaderCreateController as vm'
	});

	$stateProvider.state('reader.list', {
		url: '/list',
		templateUrl: 'reader/list.html',
		controller: 'ReaderListController as vm'
	});
	
	$stateProvider.state('thread', {
		url: '/thread',
		template: '<div ui-view style="border:1px solid red"></div>',
		abstract: true
	});

	$stateProvider.state('thread.list', {
		url: '/list',
		templateUrl: 'thread/list.html',
		controller: 'ThreadListController as vm'
	});

	$stateProvider.state('thread.show', {
		url: '/show?:id',
		templateUrl: 'thread/show.html',
		controller: 'ThreadShowController as vm'
	});
});

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
	
	for(var i = 0; i <= sd.threads.length - 1 ; i++) {
		
		if( sd.threads[i].id == $stateParams.id) {
			vm.thread = sd.threads[i];
			break;
		}
		
	}
}]);

/*-----------------------------指令部分 start----------------------------*/
app.directive('appLayout', function appLayout() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/_layout.html',
			controller: 'AppLayoutController as vm'
		};
	})
	.directive('layoutFooter', function LayoutFooter() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/footer.html',
			controller: 'LayoutFooterController as vm'
		};
	})
	.directive('layoutHeader', function LayoutHeader() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/header.html',
			controller: 'LayoutHeaderController as vm'
		};
	})
	.directive('layoutMenu', function LayoutMenu() {
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'layout/menu.html',
			controller: 'LayoutMenuController as vm'
		};
	});
/*-----------------------------指令部分 end----------------------------*/