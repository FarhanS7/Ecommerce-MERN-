const express = require;
const app = new express();
const router = require("./routes/index");

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

let URL = "mongodb+srv://ecommerce:ecommerce@ecommerce-backend.9pqs1cz.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-Backend";
let option = { user: "testuser777", pass: "testuser777", autoIndex: true };
mongoose
  .connect(URL, option)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use(cookieParser())
app.use(helmet())
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/v1",router)

app.use(express.static('client/dist'));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

module.exports = app;