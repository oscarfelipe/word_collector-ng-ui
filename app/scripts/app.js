'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])// resource to get data from word_collector REST API
  .factory('WordsService',function($resource){
      return $resource('http://localhost:8080/wc/words/:item')
    })
  .factory('DataService',function(){ // service  to share data between controllers
      var wordFromServer = {word :{name: '', definition:'', examples: ''}};

      return {
        getWordFromServer      : function() {return wordFromServer;},
        setWordFromServer      : function(object) {wordFromServer = object;}
      }
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/addword',{
          templateUrl: 'views/word.html',
          controller:'AddWordController'
        })
        .when('/updateword',{
          templateUrl: 'views/updateword.html',
          controller:'UpdateWordController'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
