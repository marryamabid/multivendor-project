const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsynErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../model/user");
const Shop = require("../model/shop");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});

exports.isAuthenticatedShop = catchAsyncErrors(async (req, res, next) => {
  const { shop_token } = req.cookies;
  if (!shop_token) {
    return next(new ErrorHandler("Please login to access this shop", 401));
  }
  const decoded = jwt.verify(shop_token, process.env.JWT_SECRET_KEY);
  req.shop = await Shop.findById(decoded.id);
  next();
});
