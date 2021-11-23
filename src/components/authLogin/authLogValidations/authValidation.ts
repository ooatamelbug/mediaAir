// import Joi
import Joi from "joi";

/**
 * this is the loginValidation schema for Auth
 */
export const loginValidation = Joi.object().keys({
  username: Joi.string().allow(null, ""),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9_.$%^&*(!@)]{8,30}$/)
    .min(8)
    .required(),
});
