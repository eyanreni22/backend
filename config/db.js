const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      
      dbName: "Our_Service",
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}, DB: ${conn.connection.name}`);
    mongoose.set("debug", true);

  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
