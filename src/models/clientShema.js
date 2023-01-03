const {  Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    user_id: String,
    name: String,
    surname: String,
    role: String,
    date_birth: String,
    dni: String,
    status: Boolean,
    tel: Number,
    residence : {
      address: String,
      city: String,
      CP: String,
    },
    data_bill: {
      cif: String,
      address: String,
      city: String,
      CP: String,
    },
    date_send: {
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

