'use strict';

var app = app || {};

(function(module) {
  const mainController = {};

  mainController.index = () => {
  // aboutController.initAboutController = function () {
    $('#about').hide();
    $('#mission-section').show();
    $('#locations-section').show();
    $('#resources-section').show();
  };
  module.mainController = mainController;
})(app);
