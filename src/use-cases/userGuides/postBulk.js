const guideDb = require("../../data-access/guidesDb");
const makeUserGuide = require("../../entities/userGuide");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/userGuidesDb')} deps.userGuideDb
 */
module.exports = function makeAddUserGuide({ userGuideDb }) {
  return async function addUserGuide({ id, ...changes }) {
    try {
      const guideToEdit = await guideDb.findById({ id });

      if (!guideToEdit) {
        throw new NotFoundError("Guide topilmadi");
      }
      const userGuide = makeUserGuide({ ...guideToEdit, ...changes });

      const result = await userGuideDb.update({
        id: userGuide.getId(),
        user_id: userGuide.getUserId(),
        guide_id: userGuide.getGuideId(),
        completed: userGuide.getCompleted(),
      });

      return result;
    } catch (err) {
      throw err;
    }
  };
};
