"use strict";

/**
 *
 */
angular.module("maxausApp").controller("ContactCtrl", ["$scope", "UtilsService", function ($scope, UtilsService) {

  UtilsService.markListItemAsSelected("contact");
  $scope.contactForm = {
    "type": "service"
  };

  $scope.submitContactForm = function() {
    //TODO: submit to server
  };

}]);
