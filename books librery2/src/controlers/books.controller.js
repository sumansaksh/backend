const express = require("express");
const router = express.Router();

const books = require("../models/books.model")

 router.post("", async(req,res)=>{
    try{
       const Book  =  await books.create(req.body);
        return res.status(200).send(Book);
    }catch(e){
       return res.status(500).json({ status: "Failed", message: e.message });
    }

});


router.get("",async (req,res)=>{
    try{
        const Book  = await books.find().populate("author_id").populate("section_id").populate("check_id").lean().exec();
        
        return res.status(200).send(Book);
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }  
  })

  router.get("/:id",async (req,res)=>{
    try{
        const Book  = await books.findById(req.params.id).lean().exec();
        
        return res.status(200).send(Book);
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }  
  })

  router.get("/:id",async (req,res)=>{
    try{
        const Book  = await books.find({ author_id: req.params.id }).lean().exec();
        
        return res.status(200).send(Book);
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }  
  })


  ///checked out
  router.get("/checked/:id",async (req,res)=>{
    try{
        const Book  = await books.find({ check_id: req.params.id }).populate("check_id").lean().exec();
        
        return res.status(200).send(Book);
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }  
  })

//book by author
  router.get("/author/:id",async (req,res)=>{
    try{
        const Book  = await books.find({ author_id: req.params.id }).populate("check_id").lean().exec();
        
        return res.status(200).send(Book);
        
    }catch(e){
        return res.status(500).json({ status: "Failed", message: e.message });
    }  
  })

  module.exports = router;