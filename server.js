'use strict';
//setting up our npm stuff and creating app and client
//TODO Do we need to set up the fs? I'm not sure if that's going to be necessary for this project?
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const PORT= process.env.PORT || 3000;
const app = express();
const conString = process.env.DATABASE_URL;
const client =  new pg.Client(conString);

client.connect();
client.on('error', err => console.error(err));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
app.use(cors())
//setting up middleware and setting static pages
app.use(bodyParser.json());
app.use(express.static('./public'));
app.get('/products/:id', function (req, res) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
//routes
app.get('/about', (req, res) => res.sendFile('about.html', {root: './public'}));
app.get('/resources', (req, res) => res.sendFile('resources.html', {root: './public'}));
