const getAllColorsByColor = require("../../services/getAllColorsByColor");
const { HTTP404Error } = require("../../helpers/error");

const getColorsByColor = async (req, res) => {
  const { color } = req.params;
  console.log(req.params);
  const result = await getAllColorsByColor(color);
  if (!result) {
    res.status(404).json({ message: "Colors nor found", status: failed });
    throw new HTTP404Error("Colors nor found");
  }
  return res.json({ status: "success", code: 200, data: result });
};

module.exports = getColorsByColor;
