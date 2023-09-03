const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");

const postUser = expressCb(controllers.postUser);
const getUsers = expressCb(controllers.getUsers);
const getUser = expressCb(controllers.getUser);
const deleteUser = expressCb(controllers.deleteUser);

const router = express.Router();

router.post("/users", postUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
