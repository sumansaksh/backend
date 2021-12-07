const express = require("express");
const app = express();
const connect = require("./config/db");
const usersController = require("./controller/user.controller");

app.use(express.json());

app.use("/users",usersController);



const start = async () => {
  await connect();
  app.listen(2000, async function () {
    console.log("listening on port 2000");
  });
};
module.exports = start;
