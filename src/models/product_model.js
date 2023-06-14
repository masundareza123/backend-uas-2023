const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    product_guid: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    stock: {
      required: true,
      type: Number,
    },
    price: {
      required: true,
      type: String,
    },
    image_url: {
      required: true,
      type: String,
    },
    create_at: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("product", dataSchema);
