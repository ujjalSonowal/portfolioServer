const Experience = require("../model/experienceModel");

// Create a new experience entry
exports.createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all experience entries
exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get experience entry by ID
exports.getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: "Experience entry not found" });
    }
    res.status(200).json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update experience entry
exports.updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!experience) {
      return res.status(404).json({ message: "Experience entry not found" });
    }
    res.status(200).json(experience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete experience entry
exports.deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: "Experience entry not found" });
    }
    res.status(200).json({ message: "Experience entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
