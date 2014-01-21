'use strict';

angular.module('booksFrontendApp')
  .controller('MainCtrl', function ($scope,$http) {
    $http({method: 'GET', url: '/books'}).success(function(data, status, headers, config){
   	  $scope.booksAsJson = data;
    });
  });
