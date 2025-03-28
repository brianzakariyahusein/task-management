const Task = require("../models/Task");

// 📌 1️⃣ GET: Ambil semua task
const getAllTasks = async (req, res) => {
  try {
    let filter = {};
    let sort = {};

    // Filtering berdasarkan query parameter
    if (req.query.status) {
      filter.status = req.query.status;
    }
    if (req.query.priority) {
      filter.priority = req.query.priority;
    }
    if (req.query.dueDate) {
      filter.dueDate = req.query.dueDate;
    }

    // Sorting berdasarkan query parameter 'sort'
    if (req.query.sort) {
      const sortField = req.query.sort.startsWith("-")
        ? req.query.sort.slice(1)
        : req.query.sort;
      sort[sortField] = req.query.sort.startsWith("-") ? -1 : 1;
    }

    const tasks = await Task.find(filter).sort(sort);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data task", error });
  }
};

// 📌 2️⃣ GET: Ambil task berdasarkan ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task tidak ditemukan" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil task", error });
  }
};

// 📌 3️⃣ POST: Tambah task baru
const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res
      .status(201)
      .json({ message: "Task berhasil ditambahkan", task: newTask });
  } catch (error) {
    res.status(400).json({ message: "Gagal menambahkan task", error });
  }
};

// 📌 4️⃣ PUT: Update task berdasarkan ID
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask)
      return res.status(404).json({ message: "Task tidak ditemukan" });

    res
      .status(200)
      .json({ message: "Task berhasil diperbarui", task: updatedTask });
  } catch (error) {
    res.status(400).json({ message: "Gagal memperbarui task", error });
  }
};

// 📌 5️⃣ DELETE: Hapus task berdasarkan ID
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ message: "Task tidak ditemukan" });

    res.status(200).json({ message: "Task berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus task", error });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
