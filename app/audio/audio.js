'use strict';

angular.module('myApp.audio', [])

.controller('AudioCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  $scope.code = $scope.templateUrl == 'audio/audio2.html' ? 'AUDIO2' : 'AUDIO1';
}]);