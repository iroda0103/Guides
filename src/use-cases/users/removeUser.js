/**
 * @param {object} deps
 * @param {import('../../data-access/usersDb')} deps.usersDb
 * @param {import('../../adapters/Upload')} deps.Upload
 */
module.exports = function makeRemoveUser({ userDb }) {
  return async function removeUser({ id }) {
    const userToDelete = await userDb.findById({ id });

    if (!userToDelete) {
      throw new Error("Foydalanuvchi topilmadi.");
    }

    const result = await userDb.remove(userToDelete);

    return userToDelete;
  };
};
