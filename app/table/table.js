'use strict';

angular.module('myApp.table', [])

.controller('TableCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  $scope.code = $scope.templateUrl == 'table/table2.html' ? 'TABLE2' : 'TABLE1';
}]);