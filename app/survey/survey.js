'use strict';

angular.module('myApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$scope', '$route', '$firebaseObject', '$rootScope', function($scope, $route, $firebaseObject, $rootScope) {
    var ref = new Firebase("https://glaring-fire-9560.firebaseio.com/");
    $scope.surveyAnswers = {};
  var entryRef = ref.child("entry");
  $scope.saveData = function() {
     entryRef.push({
        views: $rootScope.views,
        surveyAnswers: $scope.surveyAnswers
    });
  };
}]);