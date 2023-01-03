const {  Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    Id_client: String,
    data_order: String,
    status: Boolean,
    data_bill:{

    },
    date_send:{

    },

    // Falta por saber el DTO del Frond End

  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("Order", orderSchema);

