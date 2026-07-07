
const jwt = require("jsonwebtoken");
const Auth = require("../models/authModels");

const protect = async (req, res, next) => {
  let token;

  // Check if the Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract the token
      token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user and attach it to the request
      req.user = await Auth.findById(decoded.id).select("-password");

      // Continue to the next middleware/controller
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Not authorized, invalid token",
      });
    }
  }

  // No token was provided
  if (!token) {
    return res.status(401).json({
      message: "Not authorized, no token provided",
    });
  }
};

module.exports = { protect }