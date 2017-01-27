'use strict';

angular.module('myApp.form', [])

.controller('FormCtrl', ['$scope', '$route', '$rootScope', '$location', function($scope, $route, $rootScope, $location) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  $scope.code = $scope.templateUrl == 'form/form2.html' ? 'FORM2' : 'FORM1';

  $scope.cuisines = ['American', 'Mexican', 'Chinese', 'Thai', 'Italian', 'French', 'Indian', 'Other'];

  $scope.onSelectHandler = function (item) {
    console.log(item);
    $('#jq-dropdown-1').hide();
    $('#cuisinesValue').text(item);
  };

  $scope.submitForm = function () {
    alert('Thank you for submitting this form.  Go back to the survey and use this code for the first question of this section on the survey: ' + $scope.code);
  };
}]);