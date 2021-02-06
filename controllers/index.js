var {Style, Product, Feature, Photo, Skus} = require("../DB/NoSQLSchema");


exports.retrieve = (page, count) => {

  console.log(page, count)
  // return Product.find({}).sort('id').limit(count)
  // .exec();

  return Product.aggregate()
    .sort('id')
    .skip((page - 1) * count)
    .limit(count)
    .project('-_id id name slogan description category default_price')
    .exec();
};

exports.retrieveOneById = (productid) => {
  return Product.findOne({id: productid})
    .select('-_id id name slogan description category default_price features')
    .exec();
}

exports.retrieveStyles = (productid) => {
  // console.log(productid, 'productid', typeof productid)
  return Style.aggregate()
  .match({productId: parseInt(productid)})
  .project('-_id id name sale_price original_price default_style')
    .exec();
}

exports.retrieveRelated = (productid) => {
  console.log("running related!")
  return Product.aggregate()
  .match({id: productid})
  .project('-_id related')
  .exec();
}