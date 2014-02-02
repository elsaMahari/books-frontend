'use strict';

angular.module('booksFrontendApp')
.controller('MainCtrl', function ($scope,$http) {
	$http({method: 'GET', url: '/books'}).success(function(data, status, headers, config){
		$scope.booksAsJson = data;
	});
	$scope.list = [];
	$scope.author = 'Author';
	$scope.title = 'Title';
	$scope.year = '2014';
	$scope.language = 'english';
	$scope.bookpicture = 'www.nicepics.com';
	$scope.readingyear = '2014'

	$scope.submit = function() {
		if(this.entryBook.$valid){
			$http({
				method: 'POST', 
				url: '/books',
				data: {
					"author":this.author,
					"title": this.title,
					"year": this.year,
					"language": this.language,
					"bookpicture": this.bookpicture,
					"readingyear": this.readingyear
				}
			}).success(function(data, status, headers, config){
				$scope.booksAsJson = data;
			});
		}
	};
});

