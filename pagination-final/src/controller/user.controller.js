const express = require("express");

const transporter = require("../config/mail")

const router = express.Router();
const User = require("../model/user.model");


router.post("/", async (req, res) => {
  
 try {
  const user = await User.create(req.body);
  const message = {
    from: "a@a.com",
    to: "c@c.com",
    subject: `Welcome to ABC system ${req.body.first_name}`,
    text: `Hi ${req.body.first_name}, Please confirm your email addres`,
    html: `<p>Hi ${req.body.first_name}, Please confirm your email addres</p>`
  };

  transporter.sendMail(message);
  
  //console.log(page_no)
 return res.status(201).json({ user });
 } catch (e) {
  return res.status(500).json({ message: e.message, status: "Failed" });
 }
}
);


router.get("/", async (req, res) => {
      const Page = +req.query.page ||1 ;
      const size = +req.query.limit ||10 ;
      console.log(Page,size);
      const offset = (Page-1)*size;
     try {
      const user = await User.find({age:{$eq:21}}).skip(offset).limit(size).lean().exec();
     const page_no =   Math.ceil((await User.find({age:{$eq:21}}).countDocuments().lean().exec())/size);
      console.log(page_no)
     return res.status(201).json({ data: user });
     } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
     }
  }
);

module.exports = router;
