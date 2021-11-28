const express = require("express");
const router = express.Router();
const { colors } = require("../../controllers");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");

router.get("/:cataloge", ctrlWrapper(colors.getAllColorsByCataloge));

router.get("/:cataloge/:color");

router.get("/color/:color", ctrlWrapper(colors.getColorsByColor));

module.exports = router;
