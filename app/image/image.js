'use strict';

angular.module('myApp.image', [])

.controller('ImageCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  $scope.code = $scope.templateUrl == 'image/image2.html' ? 'IMAGE2' : 'IMAGE1';
}]);