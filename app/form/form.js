'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'form/form' + randomIntFromInterval(1,2) + '.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  var accessible = $scope.templateUrl == 'form/form2.html' ? true : false;
  $rootScope.views.form = {"Accessible": accessible};
}]);