/*
import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (err) => {
            console.error("mongoose connection error", err);
            throw new Error("mongodb error");
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.error("Error: ", err);
        process.exit(1);
    }
})();
*/