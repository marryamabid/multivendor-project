const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: true, // because you use port 465
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD, // FIXED HERE
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message, // FIXED HERE
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
