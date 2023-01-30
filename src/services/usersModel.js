const User = require('../models/userSchema');

exports.get_users = async () => {
  return await User.find();
};

exports.delete_user = async (id) => {
  return await User.findByIdAndDelete(id);
};

exports.add_user = async (body) => {
  const user = new User(body);
  return await User.create(user);
};

exports.get_user = async (id) => {
  return await User.findOne({ _id: id });
};

exports.edit_user = async (id, body) => {
  return await User.findByIdAndUpdate(id, body);
};




