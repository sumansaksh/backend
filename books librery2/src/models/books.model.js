const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
      book_name: { type: String, required: true },
      body:{ type:String, required:false },

      author_id:[{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true,
      }],

      section_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true,
      },

      check_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "check",
        required: true,
      },

    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  module.exports = mongoose.model("book", bookSchema);