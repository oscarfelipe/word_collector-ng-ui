'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addWord = function(){
      $location.path('/addwords');
    };
    $scope.words = [{title:"hund",definition:"perro"},{title:"kat",definition:"gato"},
        {title:"blondine",definition:"rubia"}];

  });
