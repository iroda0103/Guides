const Joi = require("joi");

exports.postGuideSchema = {
  body: Joi.object({
    title: Joi.string().trim(),
    content: Joi.string().trim(),
    notify: Joi.boolean()
  })
};
