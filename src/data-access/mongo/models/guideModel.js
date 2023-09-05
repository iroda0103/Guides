const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("Guide", schema);
