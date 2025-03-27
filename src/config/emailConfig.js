const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, 
  auth: {
    user: 'leonel.green56@ethereal.email',
    pass: 'rU6PS7GEcn7nXzXfCA',
  },
});

module.exports = transporter;
