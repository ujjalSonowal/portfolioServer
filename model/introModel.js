const mongoose = require("mongoose");
// const schema = mongoose.Schema;
const introModel = new mongoose.Schema(
  {
    welcomeText: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    caption: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("intro", introModel);
