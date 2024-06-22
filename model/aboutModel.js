const mongoose = require("mongoose");
const aboutModel = mongoose.Schema(
  {
    lottieUrl: { type: String },
    description: { type: String },
    description1: { type: String }, //we can describe about my certification
    skills: { type: String },
    resume: { type: String }, //link
    fb: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("about", aboutModel);
