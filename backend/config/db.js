const mongoose = reqreuire("mongoose");

const connectDB = async () => {
  try {
    // Koneksi ke MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Succesfully on:,".process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
