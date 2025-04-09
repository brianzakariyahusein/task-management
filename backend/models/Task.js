const mongoose = require("mongoose");

// Definisi Schema untuk Task
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "InProgress", "Completed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Membuat model berdasarkan schema yang sudah dibuat
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
