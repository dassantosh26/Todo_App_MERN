/** @format */

import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Datbase Connected Successfully`);
        
    } catch (error) {
       console.log("Error in connecting Mongo Database",error);
        
    }
}
export default connectDb;