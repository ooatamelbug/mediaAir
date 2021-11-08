"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnect = void 0;
// import monggose and config
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("config"));
// create connect to database  
exports.databaseConnect = {
    connect: function () {
        // create new variable and carry the uri of database from config
        var uri = config_1.default.get('database.uri');
        console.log(uri);
        // create connect 
        mongoose_1.default.connect(uri, {}, function (err) {
            if (err)
                throw err;
            console.log("conenct");
        });
    }
};
