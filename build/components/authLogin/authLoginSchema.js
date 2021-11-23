"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAuth = void 0;
// import some function from mongoose
var mongoose_1 = require("mongoose");
// make new loginSchema for user model to create the shape of mode and the data
var loginSchema = new mongoose_1.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    loginDate: {
        type: Date,
    },
    logoutDate: {
        type: Date
    },
    expireDate: {
        type: Date
    },
    status: {
        type: Boolean,
        default: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
}, { timestamps: true });
// export LoginAuth model for use it and create model from loginSchema
exports.LoginAuth = (0, mongoose_1.model)('LoginAuth', loginSchema);
