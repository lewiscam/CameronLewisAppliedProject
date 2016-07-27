'use strict';

angular.module('myApp.text', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/text', {
    templateUrl: 'text/text' + randomIntFromInterval(1,2) + '.html',
    controller: 'TextCtrl'
  });
}])

.controller('TextCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'text/text2.html' ? true : false;
  
  //instantiation of $rootScope.views must happen on first page visit
  $rootScope.views = {};
  $rootScope.views.text = {"Accessible": accessible};
}]);