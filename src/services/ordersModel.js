const Order = require('../models/orderSchema')

exports.get_orders  = async () => {
  return await Order.find();
}

exports.delete_order  = async (id) => {
  return await Order.findByIdAndDelete(id);
}

exports.add_order = async (body) => {
  const order = new Order(body);
  return await order.save(); 
}

exports.get_order  = async (id) => {
  return await Order.findOne({ _id: id });
}

exports.edit_order = async (id,body) => {
  return await Order.findByIdAndUpdate(id, body);
}