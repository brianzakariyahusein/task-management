require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require ('./routes/taskRoute')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Rute utama
app.use('/api/tasks', taskRoutes)

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected on mongodb://localhost:27017/task-management"))
  .catch((err) => console.error("Error: ", err));

// Jalankan server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
