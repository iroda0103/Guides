const Joi = require("joi");
const {
  offsetPaginationSchema,
  buildSortSchema,
} = require("../../../shared/schemas");

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string().allow(""),
    filters: Joi.object({ role: Joi.string }),
    page: offsetPaginationSchema,
    sort: buildSortSchema(["id", "age"]),
  }),
};
