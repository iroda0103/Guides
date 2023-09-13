const mongoose = require("mongoose");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

const schema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    role: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  {
    toJSON: { virtuals: true },
    versionKey: false,
    timestamps: false
  }
);

schema.virtual("guides", {
  ref: "UserGuide",
  localField: "_id",
  foreignField: "user_id",
  justOne: false
});

schema.plugin(mongooseLeanVirtuals);

module.exports = mongoose.model("User", schema);
