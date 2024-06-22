const mongoose = require("mongoose");
const educationModel = mongoose.Schema(
  {
    userId: { type: String },
    degree: { type: String, required: true }, //Bachelor / Master / Doctorate etc
    fieldofstudy: { type: String, required: false }, //Computer   Science/IT/Electronics Engineering etc
    institution: { type: String, required: true }, //XYZ University
    startYear: { type: Number, required: true }, //Start Year of study (YYYY)
    endYear: { type: Number }, //End Year of Study(if present or ongoing)(YYYY). If not provided
    cgpa: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("education", educationModel);
