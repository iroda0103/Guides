const Joi = require("joi");

exports.getGuideSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  })
};
