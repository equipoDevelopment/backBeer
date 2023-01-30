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

//
// Peticiones de la home/store al back sobre tipo detalles productos
//

exports.get_brand = async (brand) => {
  return await Product.find({brand}).where('total').gt(0);
}

exports.get_type  = async (type) => {
  return await Product.find({type}).where('total').gt(0);
}

exports.get_graduation  = async (graduation) => {
  return await Product.find({graduation}).where('total').gt(0);
}

exports.get_score  = async (score) => {
  return await Product.find({score}).where('total').gt(0);
}

exports.get_price  = async (price) => {
  return await Product.find({price}).where('total').gt(0);
}

exports.get_novelty  = async () => {
  return await Product.find({novelty:true});
}