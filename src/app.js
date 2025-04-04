import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

// THIS SHOULD BE THE FIRST app.use() AFTER INITIALIZATIONS
app.use(cors({
  origin: 'https://subtle-pegasus-79aaa-7.netlify.app',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Add all necessary methods
  allowedHeaders: 'Content-Type,Authorization', // Add all necessary headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json()); // Make sure this is after the cors middleware

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);

export default app;
