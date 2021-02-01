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
  let page = parseInt(urlParser.parse(req.url,true).query.page)
  let count = parseInt(urlParser.parse(req.url,true).query.count)
  console.log(page, count, 'page and count')
  //TODO: need to make some query limiters/error handling
  return controllers.retrieve(page, count)
  .then((result) => {res.json(result)})
  .catch(err => {
    console.log(err);
    res.json('error in get request')
  })
});

app.get('/products/:productid', (req, res) => {


    res.json('error in get request')

});



module.exports = app;
