'use strict';

angular.module('myApp.infographic', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/infographic', {
    templateUrl: 'infographic/infographic' + randomIntFromInterval(1,2) + '.html',
    controller: 'InfographicCtrl'
  });
}])

.controller('InfographicCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'infographic/infographic2.html' ? true : false;
  $rootScope.views.infographic = {"Accessible": accessible};
}]);