const express = require('express');
const app = express();

const morgan = require("morgan");
const path = require('path');
const databaseConnection = require('../DB');

const urlParser = require('url');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


///routes
app.get('/', (req, res) => {
  res.json('app main page!');
});

app.get('/products', (req, res) => {
  console.log('these are your params:', urlParser.parse(req.url,true).query)
  res.json('Hello Worldddo');
});



module.exports = app;
