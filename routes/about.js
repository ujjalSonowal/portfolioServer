const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutcontroller");

// Create a new about entry
router.post("/post", aboutController.createAbout);

// Get all about entries
router.get("/", aboutController.getAbouts);

// Get about entry by user ID
router.get("/:id", aboutController.getAboutByUserId);

// Update about entry
router.patch("/update/:id", aboutController.updateAbout);

// Delete about entry
router.delete("/delete/:id", aboutController.deleteAbout);

module.exports = router;
