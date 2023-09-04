const { postUserSchema } = require("./postUser");
const { getUsersSchema } = require("./getUsers");
const { getUserSchema } = require("./getUser");
const { deleteUserSchema } = require("./deleteUser");
const {loginUserSchema}=require('./loginUser')

module.exports = {
  postUserSchema,
  getUsersSchema,
  getUserSchema,
  deleteUserSchema,
  loginUserSchema
};
