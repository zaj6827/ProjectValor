'use strict';

var app = app || {};
page('/', app.mainController.index);
page('/about', app.aboutController.index);

page();
