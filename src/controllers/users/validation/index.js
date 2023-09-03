const { postUserSchema } = require("./postUser");
const { getUsersSchema } = require("./getUsers");
const { getUserSchema } = require("./getUser");
const { deleteUserSchema } = require("./deleteUser");

module.exports = {
  postUserSchema,
  getUsersSchema,
  getUserSchema,
  deleteUserSchema,
};
