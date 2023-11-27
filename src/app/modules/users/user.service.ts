import { User } from "./user.model";
const bcrypt = require("bcrypt");
const signUp = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  // Creating a new user
  const newUser = new User({
    email: data.email,
    password: hashedPassword,
  });
  // Saving the user to the database
  const result = await newUser.save();
  return result;
};
const signIn = async (data: any) => {
  const { email, password } = data;
  // Finding the user in the database
  const user = await User.findOne({ email });
};
export const UserService = {
  signUp,
  signIn,
};
