const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true},
    category: { type: String, required: true},
    price: { type: Number, required: true },
    image: { type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", productSchema);
