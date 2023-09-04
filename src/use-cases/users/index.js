const userDb = require("../../data-access/usersDb");
const Jwt = require("../../adapters/Jwt");
const makeAddUser = require("./addUser");
const makeListUser = require("./listUser");
const makeShowUser = require("./showUser");
const makeRemoveUser = require("./removeUser");
const makeLoginUser = require("./loginUser");

const addUser = makeAddUser({ userDb });
const listUser = makeListUser({ userDb });
const showUser = makeShowUser({ userDb });
const removeUser = makeRemoveUser({ userDb });
const loginUser = makeLoginUser({ userDb, Jwt });

const userUseCases = Object.freeze({
  addUser,
  listUser,
  showUser,
  removeUser,
  userDb,
  loginUser,
});

module.exports = userUseCases;
