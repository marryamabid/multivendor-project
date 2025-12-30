const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsynErrors");
const Product = require("../model/product");
const ErrorHandler = require("../utils/ErrorHandler");
const Shop = require("../model/shop");
const router = express.Router();
const upload = require("../../multer");
// Create a new product
router.post(
  "/create-product",
  upload.upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        next(new ErrorHandler("Shop not found", 404));
      } else {
        const files = req.files;
        const imageUrl = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imageUrl;
        productData.shop = shop;
        const product = await Product.create(productData);
        res.status(201).json({
          success: true,
          message: "Product created successfully",
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
module.exports = router;
