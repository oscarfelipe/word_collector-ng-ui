'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$location,WordsService) {
    $scope.words = WordsService.query(); // all the words from the server
      console.log($scope.words);
     //var kop = WordsService.get({item:"kop"});
     // console.log(kop);

    $scope.addWord = function(){
      $location.path('/addword');
    };
  });
