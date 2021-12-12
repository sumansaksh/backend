const path = require("path")
const express = require('express');
const connect = require("./configs/db");
const app = express();
app.use(express.json());

app.use(express.static("public"))
app.set("views",path.join(__dirname, "view"))
app.set("view engine","ejs");
const productController = require("./controlers/product.controler");

const start = async ()=>{
    app.listen(700, async function(){
        await connect();
        console.log('listening 700')
    })
}
app.use("/products", productController);
module.exports = start;
