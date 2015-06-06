/**
 * Created by oscar on 06-06-15.
 */
'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UpdateWordController
 * @description
 * # UpdateWordController
 * Controller of the UpdateWord process
 */
angular.module('clientApp')
    .controller('UpdateWordController', function($scope,$http,$location,DataService){
        $scope.dataFromServer = {};
        $scope.word = {};
        $scope.dataFromServer  = DataService.getWordFromServer();
        //populate the fields
        $scope.word.title      = $scope.dataFromServer.word.title;
        $scope.word.definition = $scope.dataFromServer.word.definition;
        $scope.word.examples    = $scope.dataFromServer.word.examples;
        // construct my get request...




        $scope.doUpdate = function(){
            console.log(DataService.getWordFromServer());
            console.log($scope.dataFromServer);

        };

        


    });