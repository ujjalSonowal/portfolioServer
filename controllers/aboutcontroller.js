const About = require("../model/aboutModel");

// Create a new about entry
exports.createAbout = async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all about entries
exports.getAbouts = async (req, res) => {
  try {
    const abouts = await About.find();
    res.status(200).json(abouts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get about entry by user ID
exports.getAboutByUserId = async (req, res) => {
  try {
    const about = await About.findById(req.params.id);
    if (!about) {
      return res.status(404).json({ message: "About entry not found" });
    }
    res.status(200).json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update about entry
exports.updateAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!about) {
      return res.status(404).json({ message: "About entry not found" });
    }
    res.status(200).json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete about entry
exports.deleteAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndDelete(req.params.id);
    if (!about) {
      return res.status(404).json({ message: "About entry not found" });
    }
    res.status(200).json({ message: "About entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
