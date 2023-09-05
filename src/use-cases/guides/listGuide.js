/**
 * @param {object} deps
 * @param {import('../../data-access/guidesDb')} deps.guideDb
 */
module.exports = function makeListGuide({ guideDb }) {
  return async function listGuides({
    filters = {},
    q,
    page = { limit: 10, offset: 0 },
    sort = { by: "id", order: "desc" },
  }) {
    const { data, total } = await guideDb.findAll({
      filters,
      q,
      page,
      sort,
    });
    const pageInfo = { total, limit: page.limit, offset: page.offset };
    return { data, pageInfo };
  };
};
