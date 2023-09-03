const { addUser,listUser } = require("../../use-cases/users");

const makePostUser = require("./postUser");
const makeGetUsers=require('./getUsers')

const postUser = makePostUser({ addUser });
const getUsers=makeGetUsers({listUser})

const usersController = Object.freeze({
  postUser,
  getUsers
});

module.exports = usersController;
