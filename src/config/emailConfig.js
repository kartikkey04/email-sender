const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false, 
  port: 465,
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.PASS_KEY,
  },
});

module.exports = transporter;
