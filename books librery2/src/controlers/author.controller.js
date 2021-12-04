const express = require("express");
const router = express.Router();

const author = require("../models/author.model")

router.post("/author", async(req,res)=>{
    try{
        const author =  await author.create(req.body);
           return res.status(200).send(author);
    }catch(e){
             return res.status(500).json({ status: "Failed", message: e.message });
    }

});   

module.exports = router;