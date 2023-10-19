const Joi = require("joi");

const userRegisterSchema = Joi.object({
  name: Joi.string().min(2).max(26).required().messages({
    "string.base": "The name must be a string of 2 to 26 symbols.",
    "any.required": "The name field is required.",
    "string.min": "The name must be not less 2 symbols.",
    "string.max": "The name must be no more 26 symbols.",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "The email must be a string.",
    "any.required": "The email field is required.",
  }),
});

const userLoginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "The email must be a string.",
    "any.required": "The email field is required.",
  }),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
};
