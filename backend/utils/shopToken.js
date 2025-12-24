const sendShopToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  //options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("shop_token", token, options).json({
    success: true,
    msg: "Account activated successfully!",
    user,
    token,
  });
};
module.exports = sendShopToken;
