'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('AddWordController', function ($scope) {
        $scope.add = function(word){
           $scope.words.push(word);
            console.log(word);
            console.log("holi");
            console.log($scope.words);
        };

        $scope.words = [{title:"hund",definition:"perro"},{title:"kat",definition:"gato"},
            {title:"blondine",definition:"rubia"}];
    });/**
 * Created by oscar on 03-06-15.
 */
