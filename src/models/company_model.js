const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    guid_company: {
        required: true,
        type: String,
      },
    name_company: {
      required: true,
      type: String,
    },
    email_company: {
      required: true,
      unique: true,
      lowercase: true,
      type: String,
    },
    alamat_company: {
      required: true,
      type: String,
    },
    telp_company: {
    required: true,
      type: String,
    },
    create_at: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("company", dataSchema);