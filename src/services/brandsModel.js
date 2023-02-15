const brand = require('../models/brandSchema')

exports.get_brands  = async () => {
  return await brand.find();
}