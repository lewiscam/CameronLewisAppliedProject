'use strict';

angular.module('myApp.results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results', {
    templateUrl: 'results/results.html',
    controller: 'ResultsCtrl'
  });
}])

.controller('ResultsCtrl', ['$scope', '$route', '$rootScope', '$firebaseObject', function($scope, $route, $rootScope, $firebaseObject) {
    var ref = new Firebase("https://glaring-fire-9560.firebaseio.com/");
    var entryRef = ref.child("entry");
    
    //get entries from firebase
    ref.on("value", function(entry) {
        $scope.entries = entry.val();
        console.log($scope.entries);
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    $scope.views = $rootScope.views;
}]);