const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeRemoveGuide({ guideDb }) {
  return async function removeGuide(filter) {
    const guideToDelete = await guideDb.findById(filter);

    if (!guideToDelete) {
      throw new NotFoundError("Guide topilmadi");
    }

    const result = await guideDb.remove(guideToDelete);

    return guideToDelete;
  };
};
