import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import router from "./src/routes/api.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const URL =
  "mongodb+srv://ecommerce:ecommerce@ecommerce-backend.9pqs1cz.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-Backend";

mongoose
  .connect(URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cookieParser());
app.use(helmet());

app.use(hpp());
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/v1", router);

app.use(express.static("client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

export default app;
