const express = require("express");
const app = express();
const connect = require("./configs/db");
const usersController = require("./controlers/user.controller");

app.use(express.json());

app.use("/users",usersController);



  const start = async ()=>{
    
  app.listen(3000, async function () {
    await connect();
    console.log("listening on port 3000");
  });
};
  module.exports = start;
  