'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AddWordController
 * @description
 * # AddWordController
 * Controller of the AddWord process
 */
angular.module('clientApp')
    .controller('AddWordController', function ($scope,$http,$location) {


        $scope.add = function(word) {
            //format my word as a Javascript Object
            var myWord = {
                'word': {
                    'title': word.title, 'language': 'dk',
                    'definition': word.definition, 'examples': word.examples
                }
            };

            // construct the request
            var req = {
                method: 'POST',
                url: 'http://localhost:8080/wc/words',
                headers: {

                    'Content-Type': 'application/json'
                },

                data: myWord
            };
            // perform an XHR2 to the server
            $http(req)
                .success(
                function (response) {
                    console.log(JSON.stringify(response));
                    $location.path('#/')
                })
                .error(
                    function(data,status) {
                        console.log("error : " + JSON.stringify(data));
                        console.log("error : " + JSON.stringify(status));
                    }

            );


        };



    });/**
 * Created by oscar on 03-06-15.
 */
