// 一个响应promise的服务 
GithubService.then(function(data) {
	var events = [];
	for (var i = 0; i < data.length; i++) {
		events.push(data[i].events);
	}
	return events;
}).then(function(events) {
	$scope.events = events;
});