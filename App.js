const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");//هي الداتا
const USER_MODEL = require("./API/modules/user.mod");
const Routes = require("./API/routs/Router");
const app = express();
app.use(express.json());
app.use(cors());
app.use('/' , Routes)
const mongooseLink = "mongodb+srv://ranaiyad55:rana6677@cluster0.a3fxc4e.mongodb.net/"

mongoose.connect(mongooseLink)

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

app.get("/app", (req, res) => {
  res.status(200).json({
    name: "rana",
    age: 26,
  });
});
module.exports = app;
