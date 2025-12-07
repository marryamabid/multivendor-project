const errorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  // Wrong Mongoose Object ID Error
  if (err.name == "CastError") {
    const message = `Resource  not found. Invalid: ${err.path}`;
    err = new errorHandler(message, 400);
  }
  //Mogoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new errorHandler(message, 400);
  }
  //Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid, try again`;
    err = new errorHandler(message, 400);
  }
  //JWT Expire error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token is expired, try again`;
    err = new errorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
