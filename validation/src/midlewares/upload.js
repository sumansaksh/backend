const path = require("path");
const multer = require("multer")

const storage =  multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,"../uplaods"))
    },
    filename: function (req, file, callback) {
      const uniquePreffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null,  uniquePreffix + '-' + file.originalname)
    }
  })
  
  const fileFilter = (req, file, callback)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"   ){
        callback(null, true);

    }else{
        callback(null, false);
    }
  };
  //const upload = multer({ storage: storage })

const upload = multer({
    storage,
    fileFilter,
    limits:{
    
        fileSize: 1024 * 1024 * 5//
    }
})

module.exports = upload;