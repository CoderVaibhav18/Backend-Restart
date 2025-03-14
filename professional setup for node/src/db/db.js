import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log("Error: ", err);
        process.exit(1);
    }
};
