// controllers/certificateController.js

const Certificate = require("../model/CertificateModel");

// Create a new certificate
exports.createCertificate = async (req, res) => {
  try {
    const { title, link, duration, description } = req.body;

    const certificate = new Certificate({
      title,
      link,
      duration,
      description,
    });

    await certificate.save();
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Error creating certificate", error });
  }
};

// Get all certificates
exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching certificates", error });
  }
};

// Get a single certificate by ID
exports.getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Error fetching certificate", error });
  }
};

// Update a certificate
exports.updateCertificate = async (req, res) => {
  try {
    const { title, link, duration, description } = req.body;

    const certificate = await Certificate.findByIdAndUpdate(
      req.params.id,
      { title, link, duration, description },
      { new: true }
    );

    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: "Error updating certificate", error });
  }
};

// Delete a certificate
exports.deleteCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findByIdAndDelete(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting certificate", error });
  }
};
