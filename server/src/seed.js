const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const { connectMongo } = require("./config/db");
const Product = require("./models/Product");
const Category = require("./models/Category");
const { products, categories } = require("./data/mockData");

async function seedData() {
  try {
    await connectMongo();
    console.log("Connected to MongoDB for seeding...");

    // Clear existing
    await Product.deleteMany();
    await Category.deleteMany();
    console.log("Cleared existing products and categories.");

    // Seed data
    await Category.insertMany(categories);
    await Product.insertMany(products);
    
    console.log("Successfully seeded mock data into MongoDB.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
