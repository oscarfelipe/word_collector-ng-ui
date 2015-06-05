'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('AddWordController', function ($scope,$http,$location) {


        $scope.add = function(word){
           //format my word into a Javascript Object
            var myWord = {'word': {'title': word.title, 'language':'dk',
                'definition':word.definition,'examples': word.examples}};


            var req = {
                method: 'PUT',
                url:'http://localhost:8080/wc/words',
                headers: {

                    'Content-Type': 'application/json'
                },
                useXDomain : true,
                data: myWord
            };

            $http(req)
                .success(
                    function(response) {
                        console.log("parece que resultó " + JSON.stringify(response))
                    });


            console.log("holi");

        };



    });/**
 * Created by oscar on 03-06-15.
 */
