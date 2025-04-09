// Import Task Model
const Task = require("./../models/Task");

// Fungsi untuk membuat task baru
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Buat Task baru
    const newTask = new Task({
      title,
      description,
      status: "pending",
    });

    // Simpan Task ke database
    await newTask.save();

    res.status(201).json({
      message: "Task Created Successfully",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Fungsi untuk mendapatkan semua task
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      message: "Get All Tasks Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Fungsi untuk mendapatkan task berdasarkan ID
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task retrieved successfully", task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Fungsi untuk mengupdate task berdasarkan ID
const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Fungsi untuk menghapus task berdasarkan ID
const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Fungsi untuk mengupdate status task berdasarkan ID
const updateTaskStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res
      .status(200)
      .json({ message: "Task status updated successfully", task: updatedTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.export = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  updateTaskStatusById,
};
