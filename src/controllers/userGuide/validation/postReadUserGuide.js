const Joi = require("joi");

exports.postReadUserGuideSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  })
};
