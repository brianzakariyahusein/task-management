const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");

const router = express.Router();

// Route untuk membuat task baru
router.post("/", createTask);

// Route untuk mendapatkan semua task
router.get("/", getAllTasks);

// Route untuk mendapatkan task berdasarkan ID
router.get("/:id", getTaskById);

// Route untuk memperbarui task berdasarkan ID
router.put("/:id", updateTaskById);

// Route untuk menghapus task berdasarkan ID
router.delete("/:id", deleteTaskById);

// Export router
module.exports = router;
