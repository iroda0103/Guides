const userDb = require("../../data-access/usersDb");
const makeAddUser = require("./addUser");
const makeListUser=require('./listUser')

const addUser = makeAddUser({ userDb });
const listUser=makeListUser({userDb})

const userUseCases = Object.freeze({
  addUser,
  listUser
});

module.exports = userUseCases;
