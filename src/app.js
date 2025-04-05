import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import resumeRouter from './routes/resume.routes.js';
import cors from 'cors';
import { config } from 'dotenv';
config();

const app = express();

const allowedOrigins = [process.env.ALLOWED_SITE || 'https://subtle-pegasus-79aaa-7.netlify.app'];

const corsOptions = {
  origin: (origin, callback) => {
    console.log('Received Origin:', origin); // Debug log
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS. Origin: ' + origin));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRouter);
app.use('/api/resumes', resumeRouter);

export default app;
