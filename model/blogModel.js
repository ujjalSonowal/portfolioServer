const mongoose = require("mongoose");
const blogModel = mongoose.Schema(
  {
    userId: { type: String },
    name: { type: String }, //title of the blog
    description: { type: String },
    image: { type: [String] },
    createdDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogModel);
