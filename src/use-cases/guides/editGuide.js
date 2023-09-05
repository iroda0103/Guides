const makeGuide = require("../../entities/guide");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeEditGuide({ guideDb }) {
  return async function editGuide({ id, ...changes }) {
    try {
      const guideToEdit = await guideDb.findById({ id });

      if (!guideToEdit) {
        throw new NotFoundError("Guide topilmadi");
      }

      const guide = makeGuide({ ...guideToEdit, ...changes });

      const result = await guideDb.update({
        id: guide.getId(),
        title: guide.getTitle(),
        content: guide.getContent(),
      });

      return result;
    } catch (err) {
      throw err;
    }
  };
};
