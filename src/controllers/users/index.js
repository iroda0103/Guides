const { addUser } = require("../../use-cases/users");

const makePostUser = require("./post-user");

const postUser = makePostUser({ addUser });

const usersController = Object.freeze({
  postUser,
});

module.exports = usersController;
