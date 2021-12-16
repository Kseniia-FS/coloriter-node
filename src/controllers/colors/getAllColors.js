const { getAllColorsHandler } = require("../../services");
const { HTTP404Error } = require("../../helpers/error");

const getAllColors = async (req, res) => {
  const result = await getAllColorsHandler();

  if (!result) {
    res.status(404).json({ message: "Colors nor found", status: failed });
    throw new HTTP404Error("Colors nor found");
  }
  return res.json({ status: "success", code: 200, data: result });
};

module.exports = getAllColors;
