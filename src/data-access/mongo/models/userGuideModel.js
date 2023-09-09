const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "User",
    },
    guide_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Guide",
    },
    completed: { type: Boolean,default:false },
  },
  {
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: false,
  }
);


module.exports = mongoose.model("UserGuide", schema);
