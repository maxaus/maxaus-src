'use strict';

/**
 * @ngdoc function
 * @name maxausApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maxausApp
 */
angular.module('maxausApp')
  .controller('MainCtrl', ["$scope", "UtilsService", function ($scope, UtilsService) {

    UtilsService.markListItemAsSelected("home");

  }]);
