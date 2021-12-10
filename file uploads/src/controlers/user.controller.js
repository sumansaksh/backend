const express = require("express");

const User = require("../models/user.model")

const upload = require("../midlewares/upload")
const router = express.Router();


////SINGLE FILE////////////
router.post("/",upload.single("profile_url"),async (req,res)=>{
    try{
    const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        profile_url: req.file.path,

    })
    console.log(req.body.first_name)
    return res.status(201).json({user});
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})



router.post("/multiple",upload.any("profile_url"),async (req,res)=>{
    const filePath = req.files.map(file=>file.path);
    try{
    const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        profile_url: filePath,

    })
    console.log(req.body.first_name)
    return res.status(201).json({user});
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})




module.exports = router;