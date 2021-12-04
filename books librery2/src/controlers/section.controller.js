const express = require("express");
const router = express.Router();

const section = require("../models/section.model")

 router.post("/section", async(req,res)=>{
    try{
       const section  =  await section.create(req.body);
        return res.status(200).send(section);
    }catch(e){
                  return res.status(500).json({ status: "Failed", message: e.message });
    }

});

router.get("",async(req,res)=>{
    try{
    const Section = await section.find().lean().exec()
    return res.status(200).send(Section)
    }catch(e){
     return res.status(500).json({stus:"Failed", message:e.message});
    }
  })

  module.exports = router;