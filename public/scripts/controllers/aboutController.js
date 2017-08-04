'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
  // aboutController.initAboutController = function () {
    $('#mission-section').hide();
    $('#locations-section').hide();
    $('#resources-section').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(app);
