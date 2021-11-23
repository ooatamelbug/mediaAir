"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// import some function from mongoose
var mongoose_1 = require("mongoose");
// make new UserSchema for user model to create the shape of mode and the data
var UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        min: 8,
    },
    imageProfile: {
        type: String,
    },
    educations: {
        elmantrySchool: {
            name: {
                type: String,
            },
            date: Date,
        },
        scondarySchool: {
            name: {
                type: String,
            },
            date: Date,
        },
        highSchool: {
            name: {
                type: String,
            },
            date: Date,
        },
    },
    collages: [
        {
            title: String,
            collageName: String,
            date: Date,
            degree: String,
        },
    ],
}, { timestamps: true });
// export User model for use it and create model from UserSchema
exports.User = (0, mongoose_1.model)("User", UserSchema);
