const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully on: " + process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message, "\nStack Trace:", error.stack);
    process.exit(1);
  }
}

module.exports = connectDB;
