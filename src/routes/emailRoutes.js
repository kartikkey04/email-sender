const express = require("express");
const router = express.Router();

router.post("/send-email", sendEmail);

module.exports = router;
