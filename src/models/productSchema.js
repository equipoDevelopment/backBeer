const {  Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    id: String,
    name:  { type: String, required: true },
    price: Number,
    description: { type: String, required: true },
    category: { type: String, required: true },
    total: Number,
    brand: String,
    type: String,
    graduation: Number,
    packaging: String,
    zone: String,
    score: Number,
    novelty: Boolean,
    photo1: String,

  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("Product", productSchema);

