const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your shop name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your shop email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [4, "Password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: String,
    required: [false, "Please enter your phone number"],
  },
  avatar: {
    type: String,
    required: [true, "Please upload your shop avatar"],
  },
  role: {
    type: String,
    default: "seller",
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter your shop phone number"],
  },
  address: {
    type: String,
    required: [true, "Please enter your shop address"],
  },
  zipCode: {
    type: String,
    required: [true, "Please enter your zip code"],
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});
//hash
shopSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
//JWT TOKEN
shopSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
shopSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Shop", shopSchema);
