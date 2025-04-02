import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const corsOptions = {
    origin: [process.env.ALLOWED_SITE, "https://your-netlify-app.netlify.app"],
    credentials: true
};

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);

export default app;
