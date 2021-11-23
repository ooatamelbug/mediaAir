"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
// import Joi
var joi_1 = __importDefault(require("joi"));
/**
 * this is the loginValidation schema for Auth
 */
exports.loginValidation = joi_1.default.object().keys({
    username: joi_1.default.string().allow(null, ""),
    email: joi_1.default.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    }),
    password: joi_1.default.string()
        .pattern(/^[a-zA-Z0-9_.$%^&*(!@)]{8,30}$/)
        .min(8)
        .required(),
});
