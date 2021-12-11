const express = require("express");

const { register, login} = require("./controlers/auth.controler")
const app = express();
const connect = require("./configs/db");
const productController = require("./controlers/product.controller");
app.use(express.json());

//app.use("/users",usersController)
app.post("/register", register)
app.post("/login", login )

  const start = async ()=>{
    
  app.listen(1000, async function () {
    await connect();
    console.log("listening on port 1000");
  });
};

app.use("/products", productController);
  module.exports = start;
  