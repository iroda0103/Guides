const express = require("express");
const usersRouter = require("./users/router");
const guideRouter = require("./guides/router");
const userGuideRouter = require("./userGuide/router");

const api = express.Router();

api.use("/api", usersRouter, guideRouter, userGuideRouter);

module.exports = api;
