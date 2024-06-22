const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usermodel = new schema(
  {
    name: { type: String }, //these will be also shows as contact details
    email: { type: String },
    gender: { type: String },
    phone: { type: Number },
    password: { type: String },
    address: { type: String },
    pincode: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", usermodel);
