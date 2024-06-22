const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Create a new blog entry
router.post("/post", blogController.createBlog);

// Get all blog entries
router.get("/", blogController.getBlogs);

// Get blog entry by ID
router.get("/:id", blogController.getBlogById);

// Get blog entries by user ID
router.get("/user/:userId", blogController.getBlogsByUserId);

// Update blog entry
router.patch("/update/:id", blogController.updateBlog);

// Delete blog entry
router.delete("/delete/:id", blogController.deleteBlog);

module.exports = router;
