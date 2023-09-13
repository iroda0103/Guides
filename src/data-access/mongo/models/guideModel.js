const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true }
  },
  {
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: false
  }
);

schema.virtual("revision", {
  ref: "UserGuide",
  localField: "_id",
  foreignField: "guide_id",
  justOne: false
});

module.exports = mongoose.model("Guide", schema);
