/** @format */

import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
     return res.status(401).json({
        message: "User not authenticated",
        success: false,
        error: true,
      });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
        error: true,
      });
    }
    // console.log(decode);

    req.id = decode.userId;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
export default isAuthenticated;