
const express = require("express");
const Product = require("../models/product.model");
const router = express.Router()



router.post("/",async (req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.send(product)
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})




router.get("/",async (req, res)=>{
    try{
        const product = await Product.find().lean().exec();
        const pageTitle = "welcome"
        return res.render("products/allproducts",{
            title: pageTitle,
            products:product,
        })
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})


router.get("/:id",async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id).lean().exec();
        const pageTitle = "welcome"
        return res.render("products/addproducts",{
            products:product,
        })
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})




router.get("/new",async (req, res)=>{
    try{
       
        return res.render("products/new",{
            products:product,
        })
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }
})
module.exports = router
