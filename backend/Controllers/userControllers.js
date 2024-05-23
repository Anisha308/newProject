import User from "../Models/userSchema.js";
import bcrypt from "bcryptjs";


const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  console.log(userExists.password);
  const storedPassword = userExists.password;
  const userInputPassword = password;
  bcrypt.compare(userInputPassword, storedPassword, (err, result) => {
    if (err) {
      res.status(400).json({ message: "Error comparing password" }, err);
      return;
    }
    if (result) {
      res.status(200).json({ message: "password matches" });
    } else {
      res.status(400).json({ message: "password not matched" });
    }
  });
};

const userRegister = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    mobile,
    password,
  });
  try {
    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        password: user.password,
        message: "User Registered successfully",
      });
    } else {
      return res.status(409).json({ message: "Invalid user data" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export { userLogin, userRegister };
