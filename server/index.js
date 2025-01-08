/** @format */

import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
const app = express();

dotenv.config();

connectDb();
const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
