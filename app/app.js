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
  'myApp.dataViz',
  'myApp.graphicArt',
  'myApp.table',
  'myApp.version',
  'myApp.survey',
  'myApp.results',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/text'});
}]);
