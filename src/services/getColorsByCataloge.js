const { Color } = require("../models");

const getColorByCataloge = async (cataloge) => {
  if (cataloge === "caparol") {
    let result = await Color.find({ cataloge: "caparol" });
    return result;
  }
  if (cataloge === "ncs") {
    let result = await Color.find({ cataloge: "ncs" });
    return result;
  }
  if (cataloge === "ral") {
    let result = await Color.find({ cataloge: "ral" });
    return result;
  }
  if (cataloge === "tikkurila") {
    let result = await Color.find({ cataloge: "tikkurila" });
    return result;
  }
};

module.exports = getColorByCataloge;
