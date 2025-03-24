import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});
import { connectDB } from "./db/db.js";
import app from "./app.js";
const PORT = process.env.PORT || 6000;

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("Error:", err);
        });
        app.listen(PORT, () => {
            console.log(`Server running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error !!! ", err);
    });
