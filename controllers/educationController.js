const Education = require("../model/educationModel");

// Create a new education entry
exports.createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all education entries
exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.status(200).json(educations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get education entry by user ID
exports.getEducationByUserId = async (req, res) => {
  try {
    const education = await Education.find({ userId: req.params.userId });
    if (!education) {
      return res.status(404).json({ message: "Education entry not found" });
    }
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update education entry
exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!education) {
      return res.status(404).json({ message: "Education entry not found" });
    }
    res.status(200).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete education entry
exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ message: "Education entry not found" });
    }
    res.status(200).json({ message: "Education entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
