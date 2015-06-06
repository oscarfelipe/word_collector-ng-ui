'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$location,WordsService,$http,DataService) {
    $scope.data = {};
    $scope.data.words = WordsService.query(); // all the words from the server
      console.log($scope.data.words);
     //var kop = WordsService.get({item:"kop"});
     // console.log(kop);

    $scope.addWord = function(){
      $location.path('/addword');
    };

    $scope.updateWord = function(wordname){

      //issue a get word to the server
      var req = {
        method: 'GET',
        url: 'http://localhost:8080/wc/words/' + wordname,
        headers: {
          'Content-Type': 'application/json'
        }

      };

      $http(req).success(
          function(response){
            DataService.setWordFromServer(response);//save data on service
            $location.path('/updateword');//present the update view when done
          }
      ).error(
          function(data,status){
            console.log("status : " + status);
            console.log("data : " + data);
          }
      );

      //save the state before changing the controller

      //$scope.wordFromServer.word.title;
      //$scope.wordFromServer.word.definition;
      //$scope.wordFromServer.word.examples;

    }
  });
