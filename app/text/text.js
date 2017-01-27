'use strict';

angular.module('myApp.text', [])

.controller('TextCtrl', ['$scope', '$route', '$rootScope', function($scope, $route, $rootScope) {
  $scope.templateUrl = $route.current.loadedTemplateUrl;
  $scope.code = $scope.templateUrl == 'text/text2.html' ? 'TEXT2' : 'TEXT1';
    
  $scope.fontSize = 1;

  $scope.increaseFontSize = function () {
    changeFontSize(1.25);
  };

  $scope.decreaseFontSize = function () {
    changeFontSize(0.75);
  };
  
  var changeFontSize = function (fontSize) {

    $('.accessible.text').find('article, h1, h2, h3, h4, h5, h6, p, ul, ol, a, span').each(function(i, e) {
      var currentSize = parseFloat($(e).css('font-size')) / 16;
      $(e).css('font-size', currentSize * fontSize + 'rem');
    });
  };

}]);