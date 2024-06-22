const mongoose = require("mongoose");
const certificateModel = mongoose.Schema(
  {
    title: { type: String },
    image: { data: Buffer, contentType: String },
    link: { type: String },
    duration: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("certificate", certificateModel);
