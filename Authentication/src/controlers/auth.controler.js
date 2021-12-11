require("dotenv").config()

const jwt = require("jsonwebtoken")

const User = require("../models/user.model")

const newToken = (user) =>{
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
}

const register = async (req, res) => {

    try{
    //check if email adress provided already exist throw error

    let user = await User.findOne({email: req.body.email}).lean().exec()
    
    //if it already exists then trow an error 
     
    if(user)
    return res
    .status(400)
    .json({
        staus:"failed",
        message: "please provide a different email adress"
    })

    // else we will create the user & we will hash the password as plain text password is harmfull

    user = await User.create(req.body)
    
    /*
    Hashing => plair or raw string + salt or rehash => strong hash
    Encryption => palain string + salt => encrypted string => decrypt => plain string

    */

    //we will create the token 
    const token = newToken("user")
      //types of authentication :- 1)statefull-remember 2)sateless-forget
       
      //
    //return the user and the token

    res.status(201).json({user, token});
}catch(e){
        
    return res.status(500).json({status: "failed", message: e.message})
}
};

const login = async(req, res) => {
    try{
    
        //check if email adress provided already exist
        let user = await User.findOne({email: req.body.email})
    
    
   

    //if doesn't exist trow errore 
    if(!user)
    return res
    .status(400)
    .json({
        staus:"failed",
        message: "please provide correct email adress & password"
    })

    //else match the password
    const match = await user.checkPassword(req.body.password);

    //if not match then throw an error

    if(!match)
    return res
    .status(400)
    .json({
        staus:"failed",
        message: "please provide correct email adress & password"
    })

    //if it matches then create the token
    const token = newToken("user")
    //return the user and the token

    res.status(201).json({user, token});
}catch(e){
   
    return res.status(500).json({status: "failed", message: e.message});
 }
}

module.exports = {register, login}