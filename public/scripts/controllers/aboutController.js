'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.initAboutController = function () {
    $('stuff to hide').hide();
    $('#about').show();
  }
  module.aboutController = aboutController;
})(window);
