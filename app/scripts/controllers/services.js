"use strict";

/**
 *
 */
angular.module("maxausApp").controller("ServicesCtrl", ["$scope", "UtilsService", function ($scope, UtilsService) {

  UtilsService.markListItemAsSelected("services");

}]);
