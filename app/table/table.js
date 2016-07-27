'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'table/table' + randomIntFromInterval(1,2) + '.html',
    controller: 'TableCtrl'
  });
}])

.controller('TableCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'table/table2.html' ? true : false;
  $rootScope.views.table = {"Accessible": accessible};
}]);