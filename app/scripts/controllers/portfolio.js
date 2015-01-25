"use strict";

/**
 *
 */
angular.module("maxausApp").controller("PortfolioCtrl", ["$scope", "UtilsService", function ($scope, UtilsService) {

  UtilsService.markListItemAsSelected("results");

}]);
