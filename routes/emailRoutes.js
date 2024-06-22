const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Route to handle sending emails
router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter using your email service details
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ujjalsonowal43@gmail.com", // Replace with your Gmail address
      pass: "Ujjal@43", // Replace with your Gmail password
    },
  });

  // Configure the email options
  const mailOptions = {
    from: email,
    to: "ujjalsonowal43@gmail.com", // Change this to your email
    subject: `New message from ${name}`,
    text: `${message}\n\nFrom: ${email}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

module.exports = router;
