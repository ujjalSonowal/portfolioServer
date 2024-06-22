const mongoose = require("mongoose");
const projectModel = mongoose.Schema(
  {
    userId: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    technologies: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", projectModel);
