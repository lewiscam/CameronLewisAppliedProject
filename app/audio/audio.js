'use strict';

angular.module('myApp.audio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/audio', {
    templateUrl: 'audio/audio' + randomIntFromInterval(1,2) + '.html',
    controller: 'AudioCtrl'
  });
}])

.controller('AudioCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'audio/audio2.html' ? true : false;
  $rootScope.views.audio = {"Accessible": accessible};
}]);