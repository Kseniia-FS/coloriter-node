const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const colorsSchema = new Schema({
  cataloge: { type: String },
  color: { type: String },
  name: { type: String },
});

const Color = model("color", colorsSchema);

module.exports = Color;
