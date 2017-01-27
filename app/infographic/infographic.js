'use strict';

angular.module('myApp.infographic', [])

.controller('InfographicCtrl', ['$scope', '$route', '$rootScope', function ($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  $scope.code = $scope.templateUrl == 'infographic/infographic2.html' ? 'INFOGRAPHIC2' : 'INFOGRAPHIC1';
}]);