const Intro = require("../model/introModel");

// Create a new intro entry
exports.createIntro = async (req, res) => {
  try {
    const intro = new Intro(req.body);
    await intro.save();
    res.status(201).json(intro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all intro entries
exports.getIntros = async (req, res) => {
  try {
    const intros = await Intro.find();
    res.status(200).json(intros);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get intro entry by ID
exports.getIntroById = async (req, res) => {
  try {
    const intro = await Intro.findById(req.params.id);
    if (!intro) {
      return res.status(404).json({ message: "Intro entry not found" });
    }
    res.status(200).json(intro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update intro entry
exports.updateIntro = async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!intro) {
      return res.status(404).json({ message: "Intro entry not found" });
    }
    res.status(200).json(intro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete intro entry
exports.deleteIntro = async (req, res) => {
  try {
    const intro = await Intro.findByIdAndDelete(req.params.id);
    if (!intro) {
      return res.status(404).json({ message: "Intro entry not found" });
    }
    res.status(200).json({ message: "Intro entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
