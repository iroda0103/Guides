const makeUserGuide = require("../../entities/userGuide");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/userGuidesDb')} deps.userGuideDb
 * @param {import('../../data-access/usersDb')} deps.userDb
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeAddUserGuide({ userGuideDb, userDb, guideDb }) {
  return async function addUserGuide(data) {
    try {
      const userGuide = makeUserGuide({
        ...data
      });

      const guideInfo = await guideDb.findById({ id: userGuide.getGuideId() });

      if (!guideInfo) {
        throw new NotFoundError("Guide topilmadi");
      }

      const userInfo = await userDb.findById({ id: userGuide.getUserId() });

      if (!userInfo) {
        throw new NotFoundError("Foydalanuvchi topilmadi");
      }

      const result = await userGuideDb.insert({
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
