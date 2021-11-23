"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var authLoginSchema_1 = require("../authLoginSchema");
var moment_1 = __importDefault(require("moment"));
var usersSchema_1 = require("../../users/usersSchema");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("config"));
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.userLogin = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, statusCode, username, password, userExist, verifyPassword, token, loginTime, expireTime, newLogin, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {};
                        statusCode = 200;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        username = body.username, password = body.password;
                        return [4 /*yield*/, usersSchema_1.User.findOne({ username: username })];
                    case 2:
                        userExist = _a.sent();
                        if (!!userExist) return [3 /*break*/, 3];
                        // change the  statusCode to 404 and add message to response
                        statusCode = 404;
                        response.message = "there is no user have in system!";
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, bcryptjs_1.default.compare(password, userExist.password)];
                    case 4:
                        verifyPassword = (_a.sent());
                        if (!!verifyPassword) return [3 /*break*/, 5];
                        // change the  statusCode to 404 and add message to response
                        statusCode = 404;
                        response.message = "the password is wrong!";
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, jsonwebtoken_1.default.sign({ _id: userExist._id, username: userExist.username }, config_1.default.get("jwt.secret"), { expiresIn: config_1.default.get("jwt.expireIn") })];
                    case 6:
                        token = (_a.sent());
                        loginTime = ((0, moment_1.default)(new Date()).utc().format("YYYY-MM-DD HH:mm:ss"));
                        expireTime = (0, moment_1.default)(new Date())
                            .add(parseInt(config_1.default.get("jwt.expireIn")), "hours")
                            .utc()
                            .format("YYYY-MM-DD HH:mm:ss");
                        newLogin = new authLoginSchema_1.LoginAuth({
                            token: token,
                            userId: userExist._id,
                            loginDate: loginTime,
                            expireDate: expireTime,
                            status: true,
                        });
                        return [4 /*yield*/, newLogin.save()];
                    case 7:
                        _a.sent();
                        // response data and statusCode that will return
                        statusCode = 200;
                        response.message = "";
                        response.token = token;
                        response.userData = {
                            _id: userExist._id,
                            firstName: userExist.firstName,
                            lastName: userExist.lastName,
                            image: userExist.imageProfile
                        };
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_1 = _a.sent();
                        // change the  statusCode to 500 and add message to response
                        statusCode = 500;
                        response.message = "error in data";
                        return [3 /*break*/, 10];
                    case 10: 
                    // return the response and statusCode
                    return [2 /*return*/, { response: response, statusCode: statusCode }];
                }
            });
        });
    };
    return Auth;
}());
exports.Auth = Auth;
