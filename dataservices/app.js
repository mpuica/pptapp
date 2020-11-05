//app.js
'use strict';
const routes = require('./app/routes/routes.js');
const express = require('express');
const app = express();

app.use('/', routes);

app.get('/', (req, res) => {
  res.send(`Boh!`);
});

module.exports = app;
