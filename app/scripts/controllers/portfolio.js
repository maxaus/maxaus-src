"use strict";

/**
 *
 */
angular.module("maxausApp").controller("PortfolioCtrl", ["$scope", "ProjectsService", "UtilsService", function ($scope, ProjectsService, UtilsService) {

  UtilsService.markListItemAsSelected("results");

  ProjectsService.getAll().then(function(result) {
    $scope.projects = result;
  });

}]);
