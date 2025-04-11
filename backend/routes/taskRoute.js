// Import Express and Task Controller
const express = require("express");
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");

// Create a new router object
const router = express.Router();

router.get("/", getAllTasks); // Get all tasks
router.post("/", createTask); // Create a new task
router.get("/:id", getTaskById); // Get task by ID
router.put("/:id", updateTaskById); // Update task by ID
router.delete("/:id", deleteTaskById); // Delete task by ID

// Export the router
module.exports = router;
