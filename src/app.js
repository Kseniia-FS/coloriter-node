const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const router = require("./routes/api/colors");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/colors", router);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// app.use(__);

module.exports = app;
