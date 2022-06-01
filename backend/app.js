// Configuration
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./utils/config");

// Utils
const logger = require("./utils/logger");

// Routes
const clipsRouter = require("./controllers/clips")

// Middlewares
const { errorHandler, requestLogger } = require("./utils/middleware");

// Database options

const mongoDBOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  //useCreateIndex: true,
};

// Connecting to database
logger.info("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI, mongoDBOptions)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB", error.message);
  });

// Applying middlewares
app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use("/api/clips", clipsRouter)
app.use(errorHandler);

module.exports = app;