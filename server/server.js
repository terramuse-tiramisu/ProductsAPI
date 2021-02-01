const express = require('express');
const app = express();

const morgan = require("morgan");
const path = require('path');
const databaseConnection = require('../DB');
const controllers = require('../controllers')

const urlParser = require('url');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


///routes
app.get('/', (req, res) => {
  res.json('app main page!');
});

app.get('/products', (req, res) => {
  // console.log('these are your params:', urlParser.parse(req.url,true).query);
  let page = urlParser.parse(req.url,true).query.page
  let count = urlParser.parse(req.url,true).query.count
  console.log(page, count, 'page and count')
  //TODO: need to make some query limiters/error handling
  return controllers.retrieve()
  .then((result) => res.json(result))
  .catch(err => console.log(err))
  ;
});



module.exports = app;
