const express = require("express");
const mongoose = require("mongoose");
const os = require("os");
const app = express();
app.listen(8000, () => console.log("The app is running"));
// mongoose
//   .connect("mongodb://root:example@mongo:27017")
//   .then(() => console.log("connected"))
//   .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log(`Traffic from ${os.hostname}`);
  res.send("<h1>I am Diaa Badr</h1>");
});
