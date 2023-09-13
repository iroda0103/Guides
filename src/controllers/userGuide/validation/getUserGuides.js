const Joi = require("joi");
const { offsetPaginationSchema } = require("../../../shared/schemas");

exports.getUserGuidesSchema = {
  query: Joi.object({
    q: Joi.string().allow(""),
    filters: { completed: Joi.boolean().valid(true, false) },
    page: offsetPaginationSchema
  })
};
