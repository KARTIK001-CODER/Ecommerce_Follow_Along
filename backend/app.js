const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const product = require("./controller/product");

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads")); // Serve static files from 'uploads' directory
app.use(
  bodyParser.urlencoded({ extended: true, limit: "50mb" }) // Parse URL-encoded data
);

// Configuration for environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env", // Path to environment configuration file
  });
}

// Import Routes
const user = require("./controller/user"); // User-related routes
app.use("/api/v2/user", user);
app.use("/api/v2/product", product);

// Error handler middleware
app.use(ErrorHandler);

module.exports = app;
