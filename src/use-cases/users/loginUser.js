const makeUser = require("../../entities/user");
const { UnauthorizedError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");

/**
 * @param {object} deps
 * @param {import('../../data-access/usersDb')} deps.userDb
 * @param {import('../../adapters/Jwt')} deps.Jwt
 */
module.exports = function makeLoginUser({ userDb, Jwt }) {
  return async function loginUser(data) {
    try {
      const found = await userDb.findOne({ username: data.username });

      if (!found) {
        throw new UnauthorizedError(
          "Login (username) yoki parol (password) xato."
        );
      }

      const user = makeUser(found);
      const match = user.comparePassword(data.password);

      if (!match) {
        throw new UnauthorizedError(
          "Login (username) yoki parol (password) xato."
        );
      }

      const payload = {
        user: {
          id: user.getId(),
          role: user.getRole(),
        },
      };
      const token = Jwt.generateToken(payload);

      return { token };
    } catch (e) {
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: mapErrorToStatus(e),
        body: { message: e.message },
      };
    }
  };
};
