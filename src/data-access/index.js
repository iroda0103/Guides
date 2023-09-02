const mongoose = require("mongoose");
const usersDb = require("./usersDb");

module.exports = {
  connect() {
    return mongoose.connect("mongodb://127.0.0.1:27017/exam");
  },
  usersDb,
};
