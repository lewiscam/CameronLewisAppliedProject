'use strict';

angular.module('myApp.image', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/image', {
    templateUrl: 'image/image' + randomIntFromInterval(1,2) + '.html',
    controller: 'ImageCtrl'
  });
}])

.controller('ImageCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'image/image2.html' ? true : false;
  $rootScope.views.image = {"Accessible": accessible};
}]);