// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/post", contactController.sendContactEmail);

module.exports = router;