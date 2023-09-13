const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeShowGuide({ guideDb }) {
  return async function showGuide(filter) {
    const guideInfo = await guideDb.findById(filter);

    if (!guideInfo) {
      throw new NotFoundError("Guide topilmadi");
    }

    return { ...guideInfo };
  };
};
