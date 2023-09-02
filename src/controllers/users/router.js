const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");

const postUser = expressCb(controllers.postUser);

const router = express.Router();

router.post("/users", postUser);

module.exports = router;
