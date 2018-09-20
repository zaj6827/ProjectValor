# Project Valor

A Veteran Affairs Medical facilities locator app for Washington State veterans. The idea is for users to type in their zip code and the three closest VA hospitals are returned. For each county in WA we also have pop ups displaying veteran stats.

This service app was built using the Google Maps API, [Google's Fusion Tables Layers](https://developers.google.com/maps/documentation/javascript/examples/layer-fusiontables-simple), JavaScript, jQuery, Node.js, and Express. 

[projectvalor.herokuapp.com/](projectvalor.herokuapp.com/)

Average wait times data used in waitTime.json was taken from http://www.accesstopwt.va.gov/Main/Results, converted JSON data for July 2017.

Projected veteran population for counties in Washington was taken from https://www.va.gov/vetdata/Veteran_Population.asp, unnecessary data was deleted to have a better runtime, data was converted into JSON from CSV using http://www.convertcsv.com/csv-to-json.htm.

All images used are royalty free and open source.

Team members: Zach Johnson, Ian Waites, Madeline Stevens, and Kyle Richmond. 
