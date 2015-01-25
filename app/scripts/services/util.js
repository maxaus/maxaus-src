"use strict";

/**
 *
 */
angular.module("maxausApp").factory("UtilsService", function () {

  var utilsService = {};
  
  utilsService.markListItemAsSelected = function (id) {
    $(".navbar-collapse li").each(function () {
      var item = $(this);
      if (item.attr("id") === (id)) {
        item.addClass("active");
      } else {
        item.removeClass("active");
      }
    });
  };

  return utilsService;
});
