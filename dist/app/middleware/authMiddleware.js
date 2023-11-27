"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateUser = (req, res, next) => {
    // Get the token from the request header
    const token = req.header("Authorization");
    // Check if the token is present
    if (!token) {
        return res.json({
            success: false,
            message: "Unauthorized: No token provided",
        });
    }
    try {
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Attach the decoded user information to the request object
        //@ts-ignore
        req.user = decoded;
        // Move to the next middleware or route handler
        next();
    }
    catch (error) {
        return res
            .status(401)
            .json({ success: false, message: "Unauthorized: Invalid token" });
    }
};
exports.default = authenticateUser;
