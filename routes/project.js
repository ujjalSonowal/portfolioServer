const express = require("express");

const router = express.Router();

const {
  getallProject,
  singleProject,
  AddProject,
  deleteProject,
  updateProject,
  getByUser,
} = require("../controllers/projectController");

//create project
router.post("/post", AddProject);
//get all project
router.get("/", getallProject);
// getsingle project by id
router.get("/:id", singleProject);
//delete
router.delete("/delete/:id", deleteProject);
//update
router.patch("/update/:id", updateProject);

router.get("/my/project", getByUser);

module.exports = router;
