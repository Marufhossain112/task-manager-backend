import jwt from "jsonwebtoken";
import "dotenv/config";
import { Response, Request } from "express";
import bcrypt from "bcrypt";
import { UserService } from "./user.service";
import { User } from "./user.model";
// Sign up new user
const signUp = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const result = await UserService.signUp(data);
    res.json({
      success: true,
      message: "User sign up successful",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// Sign in  user
const signIn = async (req: Request, res: Response) => {
  const data = req.body;
  const { email, password } = data;
  try {
    // finding user in the database
    const user = await User.findOne({ email });
    if (!user) {
      res.json({
        success: false,
        message: "Invalid email, please sign up",
      });
    }
    // Comparing the entered password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password as string
    );

    if (!isPasswordValid) {
      return res.json({
        success: false,
        message: "Password did not match",
      });
    }

    const token = jwt.sign(
      { userId: user?._id, email: user?.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "3d" }
    );

    await UserService.signIn(data);
    res.json({
      success: true,
      message: "User sign in successful",
      token: token,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
export const UserController = {
  signUp,
  signIn,
};
