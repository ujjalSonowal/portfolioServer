const mongoose = require("mongoose");
// const user = require("./usermodel");

const skillSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "user",
    },
    skill_name: {
      type: String,
      required: true,
      default: "",
    },
    level: {
      type: String,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Skill", skillSchema);
