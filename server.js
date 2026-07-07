const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/config/db");
const PORT = process.env.PORT || 3000;
const clothesRoutes = require("./src/routes/clothesRoutes");
const authRoutes = require("./src/routes/authRoutes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/clothes", clothesRoutes);
app.use("/api/auth", authRoutes);

// database Connection
connectDB();

// app listning
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
