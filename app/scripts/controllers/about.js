"use strict";

/**
 *
 */
angular.module("maxausApp").controller("AboutCtrl", ["$scope", "UtilsService", function ($scope, UtilsService) {

  UtilsService.markListItemAsSelected("about");
  
}]);
