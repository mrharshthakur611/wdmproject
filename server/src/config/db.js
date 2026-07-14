const mongoose = require("mongoose");

async function connectMongo() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn("MONGO_URI is not set. Running without MongoDB connection.");
    return;
  }

  await mongoose.connect(mongoUri, {
    dbName: process.env.MONGO_DB_NAME || "wdm",
    serverSelectionTimeoutMS: 10000,
  });

  console.log(`MongoDB connected to database "${mongoose.connection.name}"`);
}

module.exports = { connectMongo };
