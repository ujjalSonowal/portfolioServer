const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");

// Create a new education entry
router.post("/post", educationController.createEducation);

// Get all education entries
router.get("/", educationController.getEducations);

// Get education entry by user ID
router.get("/user/:userId", educationController.getEducationByUserId);

// Update education entry
router.patch("/update/:id", educationController.updateEducation);

// Delete education entry
router.delete("/delete/:id", educationController.deleteEducation);

module.exports = router;
