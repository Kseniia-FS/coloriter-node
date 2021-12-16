const { Color } = require("../models");

const getAllColorsHandler = async () => {
  const result = await Color.find({});
  return result;
};

module.exports = getAllColorsHandler;
