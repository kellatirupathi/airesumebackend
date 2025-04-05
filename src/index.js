import app from "./app.js";
import { connectDB } from "./db/index.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 5001; // Default to 5001 if not set
const HOST = '0.0.0.0'; // Required for Render

connectDB().then(() => {
  app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to connect to database:', error);
});
