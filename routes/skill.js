const express = require("express");
const router = express.Router();
const {
  createSkill,
  getSkills,
  getSkillById,
  getSkillsByUserId,
  updateSkill,
  deleteSkill,
} = require("../controllers/SkillController");

// Create a new skill entry
router.post("/post", createSkill);

// Get all skill entries
router.get("/", getSkills);

// Get skill entry by ID
router.get("/:id", getSkillById);

// Get skill entries by user ID
router.get("/user/:userId", getSkillsByUserId);

// Update skill entry
router.patch("/update/:id", updateSkill);

// Delete skill entry
router.delete("/delete/:id", deleteSkill);

module.exports = router;
