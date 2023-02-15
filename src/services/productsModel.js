const Product = require('../models/productSchema')

exports.get_products  = async () => {
  return await Product.find();
}

exports.delete_product  = async (id) => {
  return await Product.findByIdAndDelete(id);
}

exports.add_product = async (body) => {
  const product = new Product(body);
  return await product.save(); 
}

exports.get_product  = async (id) => {
  return await Product.findOne({ _id: id });
}

exports.edit_product = async (id,body) => {
  return await Product.findByIdAndUpdate(id, body);
}

exports.get_brand  = async (brand) => {
  return await Product.find().where('total').gt(0);
}

exports.get_novelty = async () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  skipNumeber = getRandomInt(40);
  return await Product.find({ novelty: true }).limit(4)
    .skip(skipNumeber).where('total').gt(0); 
}
