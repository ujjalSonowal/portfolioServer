const mongoose = require("mongoose");
const contactModel = mongoose.Schema(
  {
    // userId: { type: String },
    name: { type: String },
    email: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contact", contactModel);
