"use strict";

/**
 * Factory for managing contacts.
 */
angular.module("maxausApp").factory("Projects", ["$resource", function ($resource) {
  return $resource("data/projects.json", {},
  {
    "get": {method: "GET", isArray: true}
  });
}]);

/**
 *
 */
angular.module("maxausApp").factory("ProjectsService", ["Projects", function (Projects) {

  var projectsService = {};

  projectsService.getAll = function () {
    return Projects.get().$promise;
  };

  return projectsService;
}]);
