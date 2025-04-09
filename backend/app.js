// Import library yang dibutuhkan dan yang sudah kita install
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Inisialisasi express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PORT Server
const PORT = process.env.PORT || 5000;

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected on:", process.env.MONGO_URI)) 
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Endpoint dasar untuk menguji server
app.get("/", (req, res) => {
  res.send("Task Management API Is RUNNING!");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
