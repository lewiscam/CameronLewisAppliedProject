'use strict';

angular.module('myApp.video', [])

.controller('VideoCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  $scope.code = $scope.templateUrl == 'video/video2.html' ? 'VIDEO2' : 'VIDEO1';
}]);