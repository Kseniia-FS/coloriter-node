const { getColorByCataloge } = require("../../services");
const { HTTP400Error } = require("../../helpers/error");

const getAllColorsByCataloge = async (req, res) => {
  const { cataloge } = req.params;
  const result = await getColorByCataloge(cataloge);

  if (!result) {
    throw new HTTP400Error("Change query params");
  }

  return res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getAllColorsByCataloge;
