const Joi = require("joi");
const { offsetPaginationSchema } = require("../../../shared/schemas");

exports.getUserGuidesSchema = {
  query: Joi.object({
    q: Joi.string().allow(""),
    filters: Joi.object({ completed : Joi.boolean() }),
    page: offsetPaginationSchema,
  }),
};
