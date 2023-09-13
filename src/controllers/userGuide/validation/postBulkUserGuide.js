const Joi = require("joi");

exports.postBulkUserGuideSchema = {
  body: Joi.object({
    guide_id: Joi.string().trim(),
    user_ids: Joi.array().items(Joi.string().trim())
  })
};
