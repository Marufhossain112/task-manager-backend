// middleware/authMiddleware.js
import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
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
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    // Attach the decoded user information to the request object
    req.user = decoded;
    // Move to the next middleware or route handler
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

export default authenticateUser;
