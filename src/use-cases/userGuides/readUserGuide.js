const makeUserGuide = require("../../entities/userGuide");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/userGuidesDb')} deps.userGuideDb
 */
module.exports = function makeAddUserGuide({ userGuideDb }) {
  return async function addUserGuide({ id, user, ...changes }) {
    try {
      const userGuideToEdit = await userGuideDb.findById({ id });

      if (!userGuideToEdit) {
        throw new NotFoundError("User Guide topilmadi");
      }

      if (!userGuideToEdit.user_id == user) {
        throw new NotFoundError("User Guide topilmadi");
      }

      const userGuide = makeUserGuide({ ...userGuideToEdit, ...changes });

      const result = await userGuideDb.update({
        id: userGuide.getId(),
        user_id: userGuide.getUserId(),
        guide_id: userGuide.getGuideId(),
        completed: userGuide.getCompleted()
      });

      return result;
    } catch (err) {
      throw err;
    }
  };
};
