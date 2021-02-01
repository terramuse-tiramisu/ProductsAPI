var {Style, Product, Feature, Photo, Skus} = require("../DB/NoSQLSchema");


exports.retrieve = function(page = 1, count = 5) {

  return Product.find({}).sort('id').limit(count)
  .exec();
};