'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.text',
  'myApp.video',
  'myApp.audio',
  'myApp.image',
  'myApp.form',
  'myApp.infographic',
  'myApp.table'
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/audio', {
    templateUrl: 'audio/audio' + randomIntFromInterval(1,2) + '.html',
    controller: 'AudioCtrl'
  })
  .when('/audioTranscript', {
    templateUrl: 'audio/audioTranscript.html',
    controller: 'AudioCtrl'
  })
  .when('/form', {
    templateUrl: 'form/form' + randomIntFromInterval(1,2) + '.html',
    controller: 'FormCtrl'
  })
  .when('/image', {
    templateUrl: 'image/image' + randomIntFromInterval(1,2) + '.html',
    controller: 'ImageCtrl'
  })
  .when('/infographic', {
    templateUrl: 'infographic/infographic' + randomIntFromInterval(1, 2) + '.html',
    controller: 'InfographicCtrl'
  })
  .when('/table', {
    templateUrl: 'table/table' + randomIntFromInterval(1,2) + '.html',
    controller: 'TableCtrl'
  })
  .when('/text', {
    templateUrl: 'text/text' + randomIntFromInterval(1,2) + '.html',
    controller: 'TextCtrl'
  })
  .when('/video', {
    templateUrl: 'video/video' + randomIntFromInterval(1,2) + '.html',
    controller: 'VideoCtrl'
  })
  .when('/transcript', {
    templateUrl: 'video/transcript.html',
    controller: 'VideoCtrl'
  })
  .when('/cookingWithSpices', {
    templateUrl: 'infographic/cookingWithSpices.html',
    controller: 'InfographicCtrl'
  })
  .otherwise({
    redirectTo: '/text'
  });
}]);