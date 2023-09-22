const makeUserGuide = require("../../entities/userGuide");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/userGuidesDb')} deps.userGuideDb
 * @param {import('../../data-access/usersDb')} deps.userDb
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeAddUserGuide({ userGuideDb, userDb, guideDb }) {
  return async function addUserGuide(data) {
    const userGuide = makeUserGuide({
      ...data
    });

    const guideInfo = await guideDb.findById({ id: userGuide.getGuideId() });

    if (!guideInfo) {
      throw new BadRequestError("Bunday Guide mavjud emas");
    }

    const userInfo = await userDb.findById({ id: userGuide.getUserId() });

    if (!userInfo) {
      throw new BadRequestError("Bunday user mavjud emas");
    }

    const result = await userGuideDb.insert({
      id: userGuide.getId(),
      user_id: userGuide.getUserId(),
      guide_id: userGuide.getGuideId(),
      completed: userGuide.getCompleted()
    });

    return result;
  };
};
