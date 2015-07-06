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

        $scope.update = function(word){
            // construct the object as the server is expecting...
            var payload = {
                'word': word.title,
                'changes': {
                    'title': word.title, 'language': 'dk',
                    'definition': word.definition, 'examples': word.examples
                }
            };
            var req = {
                method: 'PUT', // I use PUT to update words since POST to create resources
                url: 'http://localhost:8080/wc/words/' + $scope.word.title,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: payload

            };
            //issue a PUT request to the server
            $http(req).success(
                function(response){
                    DataService.setWordFromServer(response);//save data on service
                    $location.path('/');//present the update view when done
                    console.log("success...word updated");
                }
            ).error(
                function(data,status){
                    console.log("status : " + status);
                    console.log("data : " + data);
                }
            );


        };

        


    });
