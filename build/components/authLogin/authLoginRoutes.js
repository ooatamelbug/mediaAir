"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authLogController_1 = require("./authLogController");
var validation_1 = require("../../middleware/validation");
var authLogValidations_1 = require("./authLogValidations");
var router = (0, express_1.Router)({ mergeParams: true });
// route for login 
router
    .route("/login")
    .post([(0, validation_1.validateSchema)(authLogValidations_1.schemaAuth.loginValidation, "body")], authLogController_1.loginUser);
// export router
exports.default = router;
