const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: String,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  product_style: {type: mongoose.Schema.Types.ObjectId, ref: 'Style'},
  related_products: [Number]

})

const styleSchema = new mongoose.Schema({
  id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  default_style: Number
})

const featureSchema = new mongoose.Schema({
  feature: String,
  value: String
})

const photoSchema = new mongoose.Schema({
    thumbnail_url: String,
    url: String,
    skus: String
  })

const skusSchema = new mongoose.Schema({
  //{ [item number] : quantity : number, size: string }


})


  exports.Style = mongoose.model('Style', styleSchema);
  exports.Product = mongoose.model('Product', productSchema);
  exports.Feature = mongoose.model('Product', featureSchema);
  exports.Photo = mongoose.model('Product', photoSchema);
  exports.Skus = mongoose.model('Product', skuSchema);

