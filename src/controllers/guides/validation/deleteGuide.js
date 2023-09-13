const Joi = require("joi");

exports.deleteGuideSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  })
};
