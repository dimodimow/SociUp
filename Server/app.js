const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.CONNECTION_STRING);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.APP_PORT, () => console.log("Server is running."));
