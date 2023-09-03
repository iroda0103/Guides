/**
 * @param {object} deps
 * @param {import('../../data-access/usersDb')} deps.userDb
 */
module.exports = function makeListUsers({ userDb }) {
  return async function listUsers({
    filters = {},
    q,
    page = { limit: 20, offset: 0 },
    sort = { by: "id", order: "desc" },
  }) {
    const { data, total } = await userDb.findAll({
      filters,
      q,
      page,
      sort,
    });
    const pageInfo = { total, limit:page.limit, offset:page.offset };
    return { data, pageInfo };
  };
};
