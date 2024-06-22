const Skill = require("../model/Skill");

// Create a new skill entry
exports.createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all skill entries
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get skill entry by ID
exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: "Skill entry not found" });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get skill entries by user ID
exports.getSkillsByUserId = async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.params.userId });
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update skill entry
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!skill) {
      return res.status(404).json({ message: "Skill entry not found" });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete skill entry
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ message: "Skill entry not found" });
    }
    res.status(200).json({ message: "Skill entry deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
