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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = require("./user.service");
const user_model_1 = require("./user.model");
// Sign up new user
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const result = yield user_service_1.UserService.signUp(data);
        res.json({
            success: true,
            message: "User sign up successful",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// Sign in  user
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { email, password } = data;
    try {
        // finding user in the database
        const user = yield user_model_1.User.findOne({ email });
        if (!user) {
            res.json({
                success: false,
                message: "Invalid email, please sign up",
            });
        }
        // Comparing the entered password with the hashed password in the database
        const isPasswordValid = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if (!isPasswordValid) {
            return res.json({
                success: false,
                message: "Password did not match",
            });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user === null || user === void 0 ? void 0 : user._id, email: user === null || user === void 0 ? void 0 : user.email }, process.env.JWT_SECRET, { expiresIn: "3d" });
        yield user_service_1.UserService.signIn(data);
        res.json({
            success: true,
            message: "User sign in successful",
            token: token,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
exports.UserController = {
    signUp,
    signIn,
};
