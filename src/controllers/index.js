const express = require("express");
const usersRouter = require("./users/router");
const guideRouter = require("./guides/router");

const api = express.Router();

api.use("/api", usersRouter, guideRouter);

module.exports = api;
