// server.js
import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
const app = express();

import { aihubRoutes } from "./src/routes";

console.log("PORT:", process.env.PORT); // Should output your port number
console.log(
  "OPENAI_API_KEY:",
  process.env.OPENAI_API_KEY ? "Loaded" : "Not Loaded"
);

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow requests from your React app's origin.
app.use(
  cors({
    origin: "http://localhost:5173", // or use '*' to allow all origins
  })
);

// Use the routes
app.use("/aihub", aihubRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
