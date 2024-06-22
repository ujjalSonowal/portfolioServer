const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const userrouter = require("./routes/user");
const projectRouter = require("./routes/project");
const aboutRouter = require("./routes/about");
const educationRouter = require("./routes/education");
const experienceRouter = require("./routes/experience");
const blogRouter = require("./routes/blog");
const skillRouter = require("./routes/skill");
const introRouter = require("./routes/intro");
const contactRouter = require("./routes/contact");
const emailRoutes = require("./routes/emailRoutes");
const certificateRoutes = require("./routes/certificate");
const contactRoutes = require("./routes/contact");

const port = process.env.PORT || 5002;

const app = express();

app.use(express.json());
app.use(bodyParser.json()); // middleware
app.use(cors());

//main route
app.use("/user", userrouter);
app.use("/project", projectRouter);
app.use("/about", aboutRouter);
app.use("/education", educationRouter);
app.use("/experience", experienceRouter);
app.use("/blog", blogRouter);
app.use("/skill", skillRouter);
app.use("/intro", introRouter);
app.use("/contact", contactRouter);
app.use("/", emailRoutes);
app.use("/certificates", certificateRoutes);
app.use("/contact", contactRoutes);

// console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// Load environment variables
const url = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose
    .connect(url)
    .then(() => {
        app.listen(port, () => {
            console.log(`app running in port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });