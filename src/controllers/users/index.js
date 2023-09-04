const {
  addUser,
  listUser,
  showUser,
  removeUser,
  loginUser
} = require("../../use-cases/users");

const makePostUser = require("./postUser");
const makeGetUsers = require("./getUsers");
const makeGetUser = require("./getUser");
const makeDeleteUser = require("./deleteUser");
const makeLoginUser=require('./loginUser')

const postUser = makePostUser({ addUser });
const getUsers = makeGetUsers({ listUser });
const getUser = makeGetUser({ showUser });
const deleteUser = makeDeleteUser({ removeUser });
const postLoginUser=makeLoginUser({loginUser})

const usersController = Object.freeze({
  postUser,
  getUsers,
  getUser,
  deleteUser,
  postLoginUser
});

module.exports = usersController;
