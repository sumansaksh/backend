const { schema, model } = require("mongoose");
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

   first_name: { type: String, required : true},
   last_name:{ type: String, required:true},
   email:{ type: String, required:true},
   gender:{ type: String, required:true},
   age:{type: Number, required:true},
   pincode:{type: Number, required:false},
    
    },
    {
       versionKey: false,
       timestamps: true,
    }
    );
    
    //module.exports = model{"user",userSchema};
    module.exports = model("user",userSchema)