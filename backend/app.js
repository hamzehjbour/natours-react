const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const XSS = require("xss-clean");
const hpp = require("hpp");

const AppError = require("./utils/appError");

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});

app.use("/api", limiter);
app.use(helmet());
app.use(express.json({ limit: "10kb" }));
// Data sanitization agains NoSQL query injection
app.use(mongoSanitize());
// Data sanitization agains XSS
app.use(XSS());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use("/api/v1/tours");
app.use("/api/v1/users");
app.use("/api/v1/reviews");

app.all("*", (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = "fail";
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use(globalErrorHandler);
