// 定义常量
angular.module('com.ngnice.app').constant('SystemData', {
	'users': [{
		"name": "李云龙",
		"age": 42
	}, {
		"name": "张大彪",
		"age": 39
	}, {
		"name": "魏和尚",
		"age": 27
	}, {
		"name": "段鹏",
		"age": 24
	}, {
		"name": "楚云飞",
		"age": 37
	}],
	'threads': [{
		id: 10001,
		title: '中国A股到底怎么了？',
		author: '李大霄'
	}, {
		id: 10002,
		title: '年轻人什么时候应该买房？',
		author: '马光远'
	}, {
		id: 10003,
		title: '除了股市和房地产我们还能投资些什么？',
		author: '吴晓波'
	}]
});