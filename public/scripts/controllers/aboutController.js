'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.initAboutController = function () {
    $('stuff to hide').hide();
    $('#about').show();
  }
  module.aboutController = aboutController;
})(app);

'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
