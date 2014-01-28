'use strict';

angular.module('booksFrontendApp')
.controller('MainCtrl', function ($scope,$http) {
	$http({method: 'GET', url: '/books'}).success(function(data, status, headers, config){
		$scope.booksAsJson = data;
	});
	$scope.list = [];
	$scope.text = 'hello';
	$scope.submit = function() {
		if (this.text) {
			this.list.push(this.text);
			this.text = '';
		}
	};
});

