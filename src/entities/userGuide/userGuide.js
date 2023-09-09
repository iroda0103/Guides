const { InvalidPropertyError } = require("../../shared/errors");

module.exports = function buildMakeUserGuide({ Id }) {
  return function makeUserGuide({
    id = Id.makeId(),
    user_id,
    guide_id,
    completed = false,
  } = {}) {
    if (!user_id) {
      throw new InvalidPropertyError(
        "User_guideda yaroqli user_id bo'lishi shart."
      );
    }

    if (!guide_id) {
      throw new InvalidPropertyError(
        "User_guideda yaroqli guide_id bo'lishi shart."
      );
    }

    if (!id) {
      throw new InvalidPropertyError("User_guideda yaroqli id bo'lishi shart.");
    }

    return Object.freeze({
      getId: () => id,
      getUserId: () => user_id,
      getGuideId: () => guide_id,
      getCompleted: () => completed,
    });
  };
};
