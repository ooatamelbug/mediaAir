"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express function from express plugin 
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var database_1 = require("./startup/database");
// make instance app from express function
var app = (0, express_1.default)();
// create variable type number to store the port in it
var port = 3000;
// create cors  options
var optionCors = {
    allowedHeaders: [
        'Origin',
        'Accept',
        'Content-Type',
        'X-Access-Token',
        'X-Request-With'
    ],
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD',
    origin: 'http://localhost:3000',
    preflightContinue: false,
};
// middlewares 
// use the cors and pass the options header
app.use((0, cors_1.default)(optionCors));
// use the helmet 
app.use((0, helmet_1.default)());
// connect to db
database_1.databaseConnect.connect();
// app listen to the port and run application
app.listen(port, function () {
    console.log("app run in port " + port);
});
