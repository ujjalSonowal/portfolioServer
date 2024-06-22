const express = require("express");
const router = express.Router();
const introController = require("../controllers/IntroController");

// Create a new intro entry
router.post("/post", introController.createIntro);

// Get all intro entries
router.get("/", introController.getIntros);

// Get intro entry by ID
router.get("/:id", introController.getIntroById);

// Update intro entry
router.patch("/update/:id", introController.updateIntro);

// Delete intro entry
router.delete("/delete/:id", introController.deleteIntro);

module.exports = router;
