'use strict';

angular.module('myApp.graphicArt', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/graphicArt', {
    templateUrl: 'graphic-art/graphic-art' + randomIntFromInterval(1,2) + '.html',
    controller: 'GraphicArtCtrl'
  });
}])

.controller('GraphicArtCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'graphic-art/graphic-art2.html' ? true : false;
  $rootScope.views.graphicArt = {"Accessible": accessible};
}]);