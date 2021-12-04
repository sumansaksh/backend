const express = require("express");
const router = express.Router();

const check = require("../models/check.model")

router.post("/check",async (req,res)=>{
    try{
        const check  =  await check.create(req.body);
        return res.status(200).send(check);
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }  
  })

  module.exports = router;