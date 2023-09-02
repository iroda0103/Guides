const userDb = require("../../data-access/usersDb");
const makeAddUser = require("./addUser");

const addUser = makeAddUser({ userDb });

const userUseCases = Object.freeze({
  addUser,
});

module.exports = userUseCases;
