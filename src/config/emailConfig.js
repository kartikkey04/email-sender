const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false, 
  port: 465,
  auth: {
    user: 'kartikeyshrivastav6658@gmail.com',
    pass: 'aigz mutw dsyt zwgs',
  },
});

module.exports = transporter;
