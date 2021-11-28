const { Color } = require("../models");

const getAllColorsByColor = async (color) => {
  if (color === "white") {
    let result = await Color.find({ name: /white/i });
    return result;
  }
};
module.exports = getAllColorsByColor;
