const Joi = require("joi");

exports.patchGuideSchema = {
  body: Joi.object({
    title: Joi.string().trim(),
    content: Joi.string().trim(),
    notify: Joi.boolean(),
  }),
  params: Joi.object({
    id: Joi.string().trim(),
  }),
};
