const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
      author_name: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  module.exports = mongoose.model("author", authorSchema);