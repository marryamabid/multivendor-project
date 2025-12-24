const path = require("path");
const express = require("express");
const Shop = require("../model/shop");
const upload = require("../../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const sendToken = require("../utils/jwtToken");
const router = express.Router();
const sendShopToken = require("../utils/shopToken");
const { isAuthenticatedUser } = require("../middleware/auth");
router.post(
  "/create-shop",
  upload.upload.single("avatar"),
  async (req, res, next) => {
    try {
      const { name, password, email, address, phoneNumber, avatar, zipCode } =
        req.body;
      const shopEmail = await Shop.findOne({ email });
      const filename = req.file.filename;
      if (shopEmail) {
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            res.status(500).json({ message: "Server Error" });
          }
        });
        return next(new ErrorHandler("Shop already exists", 400));
      }
      const fileURL = path.join(filename);
      const shop = {
        name,
        email,
        password,
        address,
        phoneNumber,
        avatar: fileURL,
        zipCode,
      };
      const activationToken = createActivationToken(shop);
      const activationUrl = `http://localhost:5173/shop/activation/${activationToken}`;
      try {
        await sendMail({
          email: shop.email,
          subject: "Activate your shop account",
          message: `Hello ${shop.name}, please click on the link to activate your shop account: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `Please check your email:- ${shop.email} to activate your shop account!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
const createActivationToken = (shop) => {
  return jwt.sign(shop, process.env.ACTIVATION_SECRET, {
    expiresIn: "1h",
  });
};

//activation of user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    const { activationToken } = req.body;
    const newShop = jwt.verify(activationToken, process.env.ACTIVATION_SECRET);
    const { name, email, password, address, phoneNumber, avatar, zipCode } =
      newShop;
    const shop = await Shop.findOne({ email });
    if (shop) {
      return next(new ErrorHandler("Shop already exists", 400));
    }
    const shopSave = await Shop.create({
      name,
      email,
      password,
      address,
      phoneNumber,
      avatar,
      zipCode,
    });
    console.log(shopSave);
    sendShopToken(shopSave, 201, res);
  })
);
//shop login
router.post(
  "/login-shop",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(new ErrorHandler("Please provide email and password", 400));
      }
      const shop = await Shop.findOne({ email }).select("+password");
      if (!shop) {
        return next(new ErrorHandler("User doesn't exist", 401));
      }
      const isPasswordValid = await shop.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendShopToken(shop, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
//load shop
router.get(
  "/getshop",
  isAuthenticatedUser,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shop = await Shop.findById(req.shop.id);
      if (!shop) {
        return next(new ErrorHandler("User not found", 404));
      }
      res.status(200).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;
