const mongoose = require("mongoose");

const checkSchema = new mongoose.Schema(
    {
      check_status: { type: Boolean, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  module.exports = mongoose.model("check", checkSchema);