const express = require("express");

const router = express.Router();

const {
  alluser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/usercontroller");
const {
  login,
  singup,
  forgotPassword,
} = require("../controllers/authcontroller");

router.post("/login", login);
router.post("/signup", singup);
router.post("/forgot-password", forgotPassword);
//create user
// router.post("/adduser", createUser);

// router.post("/login", loginUser);
//get all user
router.get("/", alluser);
// getsingle use
router.get("/:id", getSingleUser);
//delete
router.delete("/delete/:id", deleteUser);
//update
router.patch("/update/:id", updateUser);

module.exports = router;
