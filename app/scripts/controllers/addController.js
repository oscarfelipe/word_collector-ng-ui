'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('AddCtrl', function ($scope) {

        $scope.words = [{title:"hund",definition:"perro"},{title:"kat",definition:"gato"},
            {title:"blondine",definition:"rubia"}];
    });/**
 * Created by oscar on 03-06-15.
 */
