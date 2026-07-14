const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    items: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
