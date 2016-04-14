var module = angular.module("my.new.module", []);

module.service('Book', ['$rootScope', function($rootScope) {
	console.info( 'enter book service ... ' );
	var service = {
		books: [{
			title: "Magician",
			author: "Raymond E. Feist"
		}, {
			title: "The Hobbit",
			author: "J.R.R Tolkien"
		}],
		addBook: function(book) {
			service.books.push(book);
			$rootScope.$broadcast('books.update');
		}
	}
	return service;
}]);


module.controller("book.list", ['$scope', 'Book', function(scope, Book) {
	scope.$on('books.update', function(event) {
		console.info ('什么时候能进入到这个方法？-----');
		
		//scope.books = Book.books;  //原来的写法 测试$broadcast
		
		scope.books2 = Book.books;
		scope.$apply();
	});
	scope.books = Book.books;
}]);

module.directive("addBookButton", ['Book', function(Book) {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.bind("click", function() {
				console.log("btn click...");
				Book.addBook({
					title: "Star Wars",
					author: "George Lucas"
				});
				console.log(Book);
			});
		}
	}
}]);