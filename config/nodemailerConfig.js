const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    // logger: true,
    // debug: true,
});

transporter.verify((error, success) => {
    if (error) {
        console.error("SMTP Configuration Error:", error);
    } else {
        console.log("SMTP Configuration Successful:", success);
    }
});

module.exports = transporter;