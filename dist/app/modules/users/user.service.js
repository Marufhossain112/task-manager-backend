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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const bcrypt = require("bcrypt");
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt.hash(data.password, 10);
    // Creating a new user
    const newUser = new user_model_1.User({
        email: data.email,
        password: hashedPassword,
    });
    // Saving the user to the database
    const result = yield newUser.save();
    return result;
});
const signIn = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    // Finding the user in the database
    const user = yield user_model_1.User.findOne({ email });
});
exports.UserService = {
    signUp,
    signIn,
};
