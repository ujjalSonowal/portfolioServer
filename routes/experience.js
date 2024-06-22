const express = require("express");
const router = express.Router();
const experienceController = require("../controllers/experienceController");

// Create a new experience entry
router.post("/post", experienceController.createExperience);

// Get all experience entries
router.get("/", experienceController.getExperiences);

// Get experience entry by ID
router.get("/:id", experienceController.getExperienceById);

// Update experience entry
router.patch("/update/:id", experienceController.updateExperience);

// Delete experience entry
router.delete("/delete/:id", experienceController.deleteExperience);

module.exports = router;
