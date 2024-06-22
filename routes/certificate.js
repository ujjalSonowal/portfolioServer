// routes/certificateRoutes.js

const express = require("express");
const router = express.Router();
const {
  createCertificate,
  getAllCertificates,
  getCertificateById,
  updateCertificate,
  deleteCertificate,
} = require("../controllers/certificate");

// Create a new certificate
router.post("/post", createCertificate);

// Get all certificates
router.get("/", getAllCertificates);

// Get a single certificate by ID
router.get("/:id", getCertificateById);

// Update a certificate
router.patch("/update/:id", updateCertificate);

// Delete a certificate
router.delete("/delete/:id", deleteCertificate);

module.exports = router;
