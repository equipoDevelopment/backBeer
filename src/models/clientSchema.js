const {  Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    user_id: String,
    name: String,
    surname: String,
    email: String,
    tel: String,
    dni: String,
    date_birth: String,
    residence : {
      address: String,
      city: String,
      CP: String,
    },
    status: Boolean,
    data_bill: {
      cif: String,
      address: String,
      city: String,
      CP: String,
    },
    data_send: {
      address: String,
      tel: Number,
      city: String,
      CP: String,
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("Client", clientSchema);

