const {
  addUser,
  listUser,
  showUser,
  removeUser,
} = require("../../use-cases/users");

const makePostUser = require("./postUser");
const makeGetUsers = require("./getUsers");
const makeGetUser = require("./getUser");
const makeDeleteUser = require("./deleteUser");

const postUser = makePostUser({ addUser });
const getUsers = makeGetUsers({ listUser });
const getUser = makeGetUser({ showUser });
const deleteUser = makeDeleteUser({ removeUser });

const usersController = Object.freeze({
  postUser,
  getUsers,
  getUser,
  deleteUser,
});

module.exports = usersController;
