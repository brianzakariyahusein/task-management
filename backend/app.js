// Import library yang dibutuhkan dan yang sudah kita install
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// const mongoose = require("mongoose");

// Import Model Task
const Task = require("./models/Task");

// Inisialisasi express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PORT Server
const PORT = process.env.PORT || 5000;

// Endpoint dasar untuk menguji server
app.get("/", (req, res) => {
  res.send("Task Management API Is RUNNING!");
});

// Endpoint untuk mendapatkan semua task
app.post("/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;

    // Buat Task baru menggunakan model Task
    const task = new Task({
      title,
      description,
      status: "pending",
    });

    // Simpan Task ke database
    await task.save();

    res
      .status(201)
      .json({ message: "Task Created Succesfully", task: newTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
