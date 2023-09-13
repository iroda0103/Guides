/**
 * @param {object} deps
 * @param {import('../../data-access/userGuidesDb')} deps.userGuideDb
 */
module.exports = function makeListUserGuide({ userGuideDb }) {
  return async function listUserGuide({
    filters = {},
    q,
    page = { limit: 10, offset: 0 },
    sort = { by: "id", order: "desc" }
  }) {
    const { data, total } = await userGuideDb.findAll({
      filters,
      q,
      page,
      sort
    });
    const pageInfo = { total, limit: page.limit, offset: page.offset };
    return { data, pageInfo };
  };
};
