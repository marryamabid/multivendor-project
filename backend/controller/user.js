const path = require("path");
const User = require("../model/user");
const express = require("express");
const router = express.Router();
const upload = require("../../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const sendToken = require("../utils/jwtToken");
const { isAuthenticatedUser } = require("../middleware/auth");

router.post(
  "/create-user",
  upload.upload.single("avatar"),
  async (req, res, next) => {
    try {
      const { name, password, email } = req.body;
      const userEmail = await User.findOne({ email });
      if (userEmail) {
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            res.status(500).json({ message: "Server Error" });
          }
        });
        return next(new ErrorHandler("User already exists", 400));
      }
      const filename = req.file.filename;
      const fileURL = path.join(filename);
      const user = {
        name,
        email,
        password,
        avatar: fileURL,
      };
      console.log(user);

      // const newUser = await User.create(user);
      // res.status(201).json({
      //   success: true,
      //   message: "User created successfully",
      //   newUser,
      // });
      console.log("1. Register start");
      const activationToken = createActivationToken(user);
      const activationUrl = `http://localhost:5173/activation/${activationToken}`;
      try {
        await sendMail({
          email: user.email,
          subject: "Activate your account",
          message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `Please check your email:- ${user.email} to activate your account!`,
        });
      } catch (err) {
        return next(new ErrorHandler(err.message, 500));
      }
    } catch (error) {
      next(new ErrorHandler(error.message, 400));
    }
  }
);
//create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "1h",
  });
};
//activation of user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    const { activationToken } = req.body;

    const newUser = jwt.verify(activationToken, process.env.ACTIVATION_SECRET);
    const { name, email, password, avatar } = newUser;

    const user = await User.findOne({ email });
    if (user) return next(new ErrorHandler("User already exists", 400));

    const userSave = await User.create({ name, email, password, avatar });

    sendToken(userSave, 201, res);
  })
);
//login user
router.post(
  "/login-user",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(new ErrorHandler("Please provide email and password", 400));
      }
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return next(new ErrorHandler("User doesn't exist", 401));
      }
      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
//load user
router.get(
  "/getuser",
  isAuthenticatedUser,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
//logout user
router.get(
  "/logout",
  isAuthenticatedUser,
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });

      // Then send the JSON response
      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;
