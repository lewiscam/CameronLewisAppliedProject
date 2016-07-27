'use strict';

angular.module('myApp.video', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/video', {
    templateUrl: 'video/video' + randomIntFromInterval(1,2) + '.html',
    controller: 'VideoCtrl'
  });
}])

.controller('VideoCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'video/video2.html' ? true : false;
  $rootScope.views.video = {"Accessible": accessible};
}]);