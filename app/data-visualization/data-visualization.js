'use strict';

angular.module('myApp.dataViz', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dataViz', {
    templateUrl: 'data-visualization/data-visualization' + randomIntFromInterval(1,2) + '.html',
    controller: 'DataVizCtrl'
  });
}])

.controller('DataVizCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'data-visualization/data-visualization2.html' ? true : false;
  $rootScope.views.dataViz = {"Accessible": accessible};
}]);