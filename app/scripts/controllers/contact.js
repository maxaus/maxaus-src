"use strict";

/**
 *
 */
angular.module("maxausApp").controller("ContactCtrl", ["$scope", "UtilsService", function ($scope, UtilsService) {

  UtilsService.markListItemAsSelected("contact");

}]);
