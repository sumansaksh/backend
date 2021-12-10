const express = require("express");

const User = require("../models/user.model")

const { body, validationResult } = require('express-validator');


const router = express.Router();


////SINGLE FILE////////////
router.post("/",
 body("first_name").notEmpty().withMessage("Name is required"),
 body("last_name").notEmpty().withMessage("Last Name is required"),
 
 body("email").custom((value)=>{
  const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
  if(!isEmail||value<=0){
      throw new Error ("please enter a proper email addres");
  }
  return true;
 }),
 
 body("age").notEmpty()
 .isInt({min:1,max:100})
 .withMessage("Age is required and it should be in beetwen 1 to 100"),

 body("gender").custom((value)=>{
    const male = "Male";
    const female = "Female"
    const others = "Others"
    if(value == male || value == female || value == others){
        return true
    }
    throw new Error ("please enter a valid gender");
   }),

 body("pincode")
 .isLength({min:6, max:6})
 .withMessage("Pincode should be of 6 digits"),

  async(req,res)=>{

console.log(body("name"));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let newErrors = errors.array().map(({msg, param, location})=> {
            return{
                [param]:msg,
            };
        });
      return res.status(400).json({errprs:newErrors});
    }

    try{

    const user = await User.create(req.body);
    return res.status(201).json({user});

    }catch(e){

        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


module.exports = router;