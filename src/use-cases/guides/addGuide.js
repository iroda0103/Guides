const makeGuide = require("../../entities/guide");

/**
 * @param {object} deps
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeAddGuide({ guideDb }) {
  return async function addGuide(data) {
    const guide = makeGuide({
      ...data
    });

    const result = await guideDb.insert({
      id: guide.getId(),
      title: guide.getTitle(),
      content: guide.getContent(),
      notify: guide.getNotify()
    });

    return result;
  };
};
