const mongoose = require("mongoose");
const project = require("../model/projectModel");

//get all
const getallProject = async (req, res) => {
  const allproject = await project.find();
  res.status(200).json(allproject);
};

//get a single project by id
const singleProject = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(500).json({ error: "project not found" });
  }
  const Projectdata = await project.findOne({ _id });
  if (!Projectdata) {
    res.status(404).json({ error: "Project not found" });
  }
  res.status(201).json(Projectdata);
};

//craete Project
const AddProject = async (req, res) => {
  const projectdata = req.body;
  const userId = req.userId;
  try {
    const postproject = await project.create({
      ...projectdata,
      userId,
    });
    if (!postproject) {
      res.status(500).json({ msg: " Server Error" });
    }
    res.status(201).json(postproject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update one project details
const updateProject = async (req, res) => {
  const updatesdata = req.body;
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ error: " not found" });
  }
  const update = await project.findByIdAndUpdate(_id, {
    $set: { ...updatesdata },
  });
  if (!update) {
    res.status(500).json({ error: " fail to update" });
  }
  res.status(201).json(update);
};

//delete a Project
const deleteProject = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ error: "not a vaild id" });
  }
  const deleteone = await project.findByIdAndDelete(_id);
  if (!deleteone) {
    res.status(404).json({ error: "not deleted" });
  }
  res.status(200).json(deleteone);
};

//get project by user id
const getByUser = async (req, res) => {
  const { id: userId } = req.params;
  const projects = await project.find({ userId: userId });
  if (!projects) {
    return res.status(404).json({ message: "project not found" });
  }
  res.status(202).json(projects);
};

module.exports = {
  getallProject,
  singleProject,
  AddProject,
  deleteProject,
  updateProject,
  getByUser,
};
