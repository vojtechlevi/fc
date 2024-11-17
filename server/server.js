const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Import routes
const orderRoutes = require("./src/routes/orderRoutes");
const newsletterRoutes = require("./src/routes/newsletterRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

console.log("API Key:", process.env.SENDGRID_API_KEY);
console.log("List ID:", process.env.SENDGRID_MAILING_ID);

// Middleware
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// Routes
app.use("/api", orderRoutes);
app.use("/api", newsletterRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
