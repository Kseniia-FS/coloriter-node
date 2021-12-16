const express = require("express");
const router = express.Router();
const { colors } = require("../../controllers");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");

router.get("/", ctrlWrapper(colors.getAllColors));

router.get("/:color", ctrlWrapper(colors.getColorsByColor));

router.get("/:cataloge", ctrlWrapper(colors.getAllColorsByCataloge));

router.get("/:cataloge/:color");

module.exports = router;
