import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashpassword = await bcryptjs.hash(password, 8);

    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashpassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    // res.status(200).json({
    //   message: "Login Successful", user: {
    //     _id: user._id,
    //     fullname: user.fullname,
    //     email: user.email
    //   }
    // });

    const token = jwt.sign({
      id: user._id,
      name: user.fullname,
      email: user.email,
    }, process.env.JWT_SECRET);

    res.cookie("token", token)
    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      token: token
    });

  } catch (error) {
    console.log("error" + error.message)
  }
}