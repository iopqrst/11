'use strict';

// settings app router
angular.module('com.ngnice.app').config(function($stateProvider, $urlRouterProvider) {
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
		url: '/:id/show?param1&param2',
		templateUrl: 'thread/show.html',
		controller: 'ThreadShowController as vm'
	});
});
