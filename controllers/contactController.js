const transporter = require("../config/nodemailerConfig");
const Contact = require("../model/contactModel");

exports.sendContactEmail = async(req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, // Your authenticated email address
        to: process.env.EMAIL_USER, // Your email address where you want to receive form submissions
        subject: `Contact form submission from ${name}`,
        text: message,
        replyTo: email, // Actual sender's email address
    };

    try {
        // console.log("Attempting to send email");
        await transporter.sendMail(mailOptions);
        // console.log("Email sent successfully");

        const contact = new Contact({ name, email, message });
        await contact.save();
        // console.log("Contact saved to the database");

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        // console.error("Error in sending message:", error);
        if (error.response) {
            // console.error("SMTP Response:", error.response);
        }
        res.status(500).json({ message: "Failed to send message" });
    }
};