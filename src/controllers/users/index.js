const { addUser, listUser, showUser } = require("../../use-cases/users");

const makePostUser = require("./postUser");
const makeGetUsers = require("./getUsers");
const makeGetUser = require("./getUser");

const postUser = makePostUser({ addUser });
const getUsers = makeGetUsers({ listUser });
const getUser = makeGetUser({ showUser });

const usersController = Object.freeze({
  postUser,
  getUsers,
  getUser,
});

module.exports = usersController;
