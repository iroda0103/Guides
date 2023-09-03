const userDb = require("../../data-access/usersDb");
const makeAddUser = require("./addUser");
const makeListUser = require("./listUser");
const makeShowUser = require("./showUser");

const addUser = makeAddUser({ userDb });
const listUser = makeListUser({ userDb });
const showUser = makeShowUser({ userDb });

const userUseCases = Object.freeze({
  addUser,
  listUser,
  showUser,
});

module.exports = userUseCases;
