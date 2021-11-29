const { Color } = require("../models");

const getAllColorsByColor = async (color) => {
  if (color === "white") {
    let result = await Color.find({ name: /white|weiss|0502/i });
    return result;
  }
  if (color === "red") {
    let result = await Color.find({
      name: /korall|rose|y80r|venezia|y90r|323/i,
    });
    return result;
  }
  if (color === "orange") {
    let result = await Color.find({
      name: /onyx|aprico|y50r|312|313|314|315/i,
    });
    return result;
  }
  if (color === "gold") {
    let result = await Color.find({ name: /siena|y10r|-y|303|398/i });
    return result;
  }
  if (color === "yellow") {
    let result = await Color.find({ name: /curry|ginster|g90y|0515|300|302/i });
    return result;
  }
  if (color === "lime") {
    let result = await Color.find({ name: /jade|g30y|g40y|391|388/i });
    return result;
  }
  if (color === "green") {
    let result = await Color.find({
      name: /oase|mint|b90y|b80g|379|380|377|378/i,
    });
    return result;
  }
  if (color === "teal") {
    let result = await Color.find({ name: /patina|b40g|367|368|370/i });
    return result;
  }
  if (color === "blue") {
    let result = await Color.find({ name: /coelin|pacific|b10y|358|364/i });
    return result;
  }
  if (color === "violet") {
    let result = await Color.find({
      name: /lavendel|aquarell|viola|clematis|r50b|343|344|345|346|347/i,
    });
    return result;
  }
  if (color === "cold") {
    let result = await Color.find({ name: /grau|-n|498|500/i });
    return result;
  }
  if (color === "warm") {
    let result = await Color.find({
      name: /palazzo|1002|1502|2002|2005|3005|482|484|485/i,
    });
    return result;
  }
};
module.exports = getAllColorsByColor;
