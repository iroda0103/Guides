/**
 * @param {object} deps
 * @param {import('../../data-access/usersDb')} deps.usersDb
 */
module.exports = function makeShowUser({ userDb }) {
  return async function showUser(filter) {
    const userInfo = await userDb.findOne(filter);

    if (!userInfo) {
      throw new Error("Foydalanuvchi topilmadi");
    }

    return userInfo;
  };
};
