const {  Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    id: String,
    name:  { type: String, required: true },
    price: Number,
    description: String,
    category: { type: String, required: true },
    total: Number,
    brand: String,
    type: String,
    graduation: Number,
    packaging: String,
    zone: String,
    score: Number,
    novelty: Boolean,
    price: Number,
    photo1: String,
    photo2: String,
    photo3: String,
    photo4: String,
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("Product", productSchema);

