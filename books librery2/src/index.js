const express = require("express");
const app = express();

const connect = require("./configs/db")

const books = require("./models/books.model")
const check = require("./models/check.model")
const section = require("./models/section.model")
const author = require("./models/author.model")

const sectionController = require("./controlers/section.controller"); 
const authorController = require("./controlers/author.controller")
const booksController = require("./controlers/books.controller")
const checkController = require("./controlers/check.controller")

  app.use(express.json());

                      
app.use("/section",sectionController);
app.use("/author",authorController);
app.use("/check",checkController);
app.use("/books",booksController);
        

module.exports = app;



