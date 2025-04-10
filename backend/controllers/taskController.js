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
      const dueDate = new Date(req.query.dueDate);
      if (!isNaN(dueDate)) {
        filter.dueDate = {
          $gte: dueDate,
          $lt: new Date(dueDate.getTime() + 86400000),
        };
      }

      if (req.query.dueDate_gte || req.query.dueDate_lte) {
        filter.dueDate = {};
        if (req.query.dueDate_gte)
          filter.dueDate.$gte = new Date(req.query.dueDate_gte);
        if (req.query.dueDate_lte)
          filter.dueDate.$lte = new Date(req.query.dueDate_lte);
      }
    }
    // ✅ Filter berdasarkan status
    // GET http://localhost:5000/api/tasks?status=completed

    // ✅ Filter berdasarkan priority
    // GET http://localhost:5000/api/tasks?priority=high

    // ✅ Filter berdasarkan dueDate (tanggal spesifik)
    // GET http://localhost:5000/api/tasks?dueDate=2025-04-01

    // ✅ Filter berdasarkan rentang dueDate
    // GET http://localhost:5000/api/tasks?dueDate_gte=2025-03-01&dueDate_lte=2025-04-01

    // ✅ Kombinasi Filter
    // GET http://localhost:5000/api/tasks?status=pending&priority=low


    if (req.query.sort) {
      const sortField = req.query.sort.startsWith("-")
        ? req.query.sort.slice(1)
        : req.query.sort;
      sort[sortField] = req.query.sort.startsWith("-") ? -1 : 1;
    }
        // ✅ Sorting berdasarkan Priority (Ascending)
    // GET http://localhost:5000/api/tasks?sort=priority

    // ✅ Sorting berdasarkan Priority (Descending)
    // GET http://localhost:5000/api/tasks?sort=-priority

    // ✅ Sorting berdasarkan Due Date (Ascending)
    // GET http://localhost:5000/api/tasks?sort=dueDate

    // ✅ Sorting berdasarkan Due Date (Descending)
    // GET http://localhost:5000/api/tasks?sort=-dueDate

    // ✅ Sorting + Filtering Bersamaan
    // GET http://localhost:5000/api/tasks?status=pending&sort=-priority

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
