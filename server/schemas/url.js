const Joi = require("joi");

const urlSchema = Joi.object({
  url: Joi.string().required().messages({
    "any.required": "The url field is required.",
  }),
});

module.exports = urlSchema;
