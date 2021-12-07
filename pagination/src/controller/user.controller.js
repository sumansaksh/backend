const express = require("express");

const router = express.Router();
const User = require("../model/user.model");


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
