/** @format */

import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(403).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        message: "Already email registered",
        error: true,
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "Registered successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const login = async (req,res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({
        message: "Incorrect email or password",
        error: true,
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(403).json({
        message: "Incorrect password",
        error: true,
        success: false,
      });
    }
    return res.status(201).json({
      message: `Welcome back ${user.name} `,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
