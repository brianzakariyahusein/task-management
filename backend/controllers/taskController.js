// Import Task Model
const Task = require("../models/Task");

// Get All Tasks
// @desc
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error // Didn't get all tasks" });
  }
};

// Get Task By Id
// @desc
// const getTaskById = async (req,res) => {}

// Create Task
// @desc
const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: "Bad Request // Didn't create task" });
  }
};

// Update Task By Id
// @desc
// const updateTaskById = async (req, res) => {};

// Delete Task By ID
// @desc
// const deleteTaskById = async (req, res) => {};

// Export modules
module.exports = {
  getAllTasks,
  // getTaskById,
  createTask,
  // updateTaskById,
  // deleteTaskById,
};
