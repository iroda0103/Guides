const userDb = require("../../data-access/usersDb");
const makeAddUser = require("./addUser");
const makeListUser = require("./listUser");
const makeShowUser = require("./showUser");
const makeRemoveUser = require("./removeUser");

const addUser = makeAddUser({ userDb });
const listUser = makeListUser({ userDb });
const showUser = makeShowUser({ userDb });
const removeUser = makeRemoveUser({ userDb });

const userUseCases = Object.freeze({
  addUser,
  listUser,
  showUser,
  removeUser
});

module.exports = userUseCases;
