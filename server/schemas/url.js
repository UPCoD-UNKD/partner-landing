const Joi = require("joi");
const { iso8601Regex } = require("../constants/constants");

const urlAddSchema = Joi.object({
  url: Joi.string().required().messages({
    "any.required": "The url field is required.",
  }),
  utm: Joi.object()
    .pattern(Joi.string().required(), Joi.string().required())
    .messages({
      "any.required": "The utm field must be an object with key-value pairs.",
    }),
});

const statsSchema = Joi.object({
  date: Joi.string()
    .pattern(iso8601Regex)
    .required()
    .messages({
      "any.required": "The date field is required.",
      "string.pattern.base": "The date must be in format ISO 8601.",
    })
    .custom((value, helpers) => {
      const dateObj = new Date(value);

      if (isNaN(dateObj.getTime())) {
        return helpers.error("any.invalid", {
          message: "Invalid date format. Please use ISO 8601",
        });
      }

      return value;
    }, "custom validation"),
  ip: Joi.string().required().messages({
    "any.required": "The ip field is required.",
  }),
  browser: Joi.string().required().messages({
    "any.required": "The browser field is required.",
  }),
});

module.exports = { urlAddSchema, statsSchema };
