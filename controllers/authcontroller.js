const mongoose = require("mongoose");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../model/usermodel");
const secretKey = "secret-key";
//signup a new user

const singup = async (req, res) => {
  const { name, email, password, gender, phone, address, pincode } = req.body;

  try {
    const existinguser = await user.findOne({ email });
    if (existinguser) {
      res.status(201).json({ msg: "email already registered" });
    }

    const hashpassword = await bcrpyt.hash(password, 12);
    const newuser = await user.create({
      name,
      email,
      password: hashpassword,
      phone,
      gender,
      pincode,
      address,
    });
    const token = jwt.sign(
      { email: newuser.email, id: newuser._id },
      secretKey,
      { expiresIn: "1h" }
    );
    if (!newuser) {
      res.status(404).json({ msg: "user not found..." });
    }
    res.status(200).json({ result: newuser, token });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};

//login a existing user

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existinguser = await user.findOne({ email });
    if (!existinguser) {
      res.status(404).json({ msg: "email not registered" });
    }
    const validpassword = await bcrpyt.compare(password, existinguser.password);

    if (!validpassword) {
      res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      secretKey,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      result: existinguser,
      token,
      id: existinguser._id,
    });
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong..." });
  }
};

// Request password reset
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ msg: "User not found" });
    }
    // Generate reset token (this should be a unique value)
    const resetToken = jwt.sign({ email: existingUser.email }, secretKey, {
      expiresIn: "1h",
    });
    // TODO: Send reset token via email
    // For simplicity, let's just return the reset token for now
    res.status(200).json({ resetToken });
  } catch (error) {
    console.error("Error requesting password reset: ", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = {
  login,
  singup,
  forgotPassword,
};
