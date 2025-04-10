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
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server Error // Couldn't fetch task" });
  }
};

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
const updateTaskById = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: "Bad Request // Couldn't update task" });
  }
};

// Delete Task By ID
// @desc
// const deleteTaskById = async (req, res) => {};

// Export modules
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  // deleteTaskById,
};
