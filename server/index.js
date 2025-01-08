/** @format */

import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import userRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
const app = express();

dotenv.config();
connectDb();

//middleware
app.use(express.json());//As we are sending response in json file so that we have to use this middleware for getting response
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
