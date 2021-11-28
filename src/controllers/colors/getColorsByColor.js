const getAllColorsByColor = require("../../services/getAllColorsByColor");

const getColorsByColor = async (req, res) => {
  const { color } = req.params;
  console.log(req.params);
  const result = await getAllColorsByColor(color);
  return res.json({ status: "success", code: 200, data: result });
};

module.exports = getColorsByColor;
