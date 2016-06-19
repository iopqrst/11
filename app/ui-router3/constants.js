// 定义常量
angular.module('com.ngnice.app').constant('SystemData', {
	'errorMessages': {
		required: '此项部分能为空',
		email: '不是有效的数据格式',
		same: '密码必须保持一致'
	},
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
		author: '李大霄',
		publishDate : '2016-06-19T15:02:22'
	}, {
		id: 10002,
		title: '年轻人什么时候应该买房？',
		author: '马光远',
		publishDate : '2016-06-19T15:01:31'
	}, {
		id: 10003,
		title: '除了股市和房地产我们还能投资些什么？',
		author: '吴晓波',
		publishDate : '2016-06-19T15:07:49'
	}]
});