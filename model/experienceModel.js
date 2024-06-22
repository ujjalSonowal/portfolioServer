const mongoose = require("mongoose");
const experienceModel = mongoose.Schema(
  {
    title: { type: String },
    period: { type: String },
    company: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("experience", experienceModel);
