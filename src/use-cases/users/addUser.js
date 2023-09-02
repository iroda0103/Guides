const makeUser = require("../../entities/user");

/**
 * @param {object} deps
 * @param {import('../../data-access/usersDb')} deps.userDb
 */
module.exports = function makeAddUser({ userDb }) {
  return async function addUser(data) {
    try {
      const user = makeUser({
        ...data,
      });

      user.hashPassword();
      const result = await userDb.insert({
        id: user.getId(),
        first_name: user.getFirstName(),
        last_name: user.getLastName(),
        age: user.getAge(),
        role: user.getRole(),
        username: user.getUsername(),
        password: user.getPassword(),
      });

      return result;
    } catch (err) {
      throw err;
    }
  };
};
