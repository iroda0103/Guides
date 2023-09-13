const makeUserGuide = require("../../entities/userGuide");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/userGuidesDb')} deps.userGuideDb
 * @param {import('../../data-access/usersDb')} deps.userDb
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeBulkUserGuide({ userGuideDb, userDb, guideDb }) {
  return async function bulkUserGuide(data) {
    try {
      const bulkArray = [];

      for (const user_guide_bulk of data) {
        const userGuide = makeUserGuide({
          ...user_guide_bulk
        });

        if (bulkArray.length === 0) {
          const guideInfo = await guideDb.findById({
            id: userGuide.getGuideId()
          });

          if (!guideInfo) {
            throw new NotFoundError("Guide topilmadi");
          }
        }

        const userInfo = await userDb.findById({ id: userGuide.getUserId() });

        if (!userInfo) {
          throw new NotFoundError("Foydalanuvchi topilmadi");
        }

        bulkArray.push({
          id: userGuide.getId(),
          user_id: userGuide.getUserId(),
          guide_id: userGuide.getGuideId(),
          completed: userGuide.getCompleted()
        });
      }

      const result = await userGuideDb.insert(bulkArray);

      return result;
    } catch (err) {
      throw err;
    }
  };
};
