const {  Schema, model } = require("mongoose");

const brandSchema = new Schema(
  {
    _id: String,
    image: String,
    brand: String,

  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("brands", brandSchema);