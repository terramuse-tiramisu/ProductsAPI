var {Style, Product, Feature, Photo, Skus} = require("../DB/NoSQLSchema");


exports.retrieve = function(page = 1, count = 5) {

//NOTE NEED TO USE .skip!!!!!!!! for pages

  // return Product.find({}).sort('id').limit(count)
  // .exec();

  return Product.aggregate()
    .project('id name slogan description category default_price related_products')
    .sort('id')
    .skip((page - 1) * count)
    .limit(count)
    .exec();
};