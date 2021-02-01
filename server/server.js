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
  // console.log(req.params)
  if (req.params.productid) {
    productid = req.params.productid;
  }

  return controllers.retrieveOneById(productid)
  .then((result) => {res.json(result)})
  .catch(err => {
    console.log(err);
    res.json('error in get request')
  })
});

app.get('/products/:productid/styles', (req, res) => {
  // console.log(req.params)
  if (req.params.productid) {
    productid = req.params.productid;
  }

  return controllers.retrieveStyles(productid)
  .then((result) => {res.json(result)})
  .catch(err => {
    console.log(err);
    res.json('error in get request to styles')
  })
});

app.get('/products/:productid/related', (req, res) => {
  // console.log(req.params)
  console.log('get request for product id for related prods')
  if (req.params.productid) {
    productid = parseInt(req.params.productid);
  }

  return controllers.retrieveRelated(productid)
  .then((result) => {
    console.log(result)
    res.send(result[0].related)})
  .catch(err => {
    console.log(err);
    res.json('error in get request to related')
  })
});

module.exports = app;
