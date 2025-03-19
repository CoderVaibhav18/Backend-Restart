import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// import routes
import userRouter from "./routes/user.route.js";

// user routes declear
app.use("/api/v1/users", userRouter);

export default app;
