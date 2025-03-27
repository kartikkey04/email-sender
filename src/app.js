const express = require("express");
const dotenv = require("dotenv").config();
const emailRoutes = require("./routes/emailRoutes");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
