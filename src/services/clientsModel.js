const Client = require('../models/clientSchema')

exports.get_clients  = async () => {
  return await Client.find();
}

exports.delete_client  = async (id) => {
  return await Client.findByIdAndDelete(id);
}

exports.add_client = async (body) => {
  const client = new Client(body);
  return await client.save(); 
}

exports.get_client  = async (id) => {
  return await Client.findOne({ _id: id });
}

exports.edit_client = async (id,body) => {
  return await Client.findByIdAndUpdate(id, body);
}