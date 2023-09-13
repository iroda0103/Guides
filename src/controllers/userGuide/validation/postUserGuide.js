const Joi = require("joi");

exports.postUserGuideSchema = {
  body: Joi.object({
    user_id: Joi.string().trim(),
    guide_id: Joi.string().trim()
  })
};
