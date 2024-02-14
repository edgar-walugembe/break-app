// const { User } = require("./database/models");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const { User } = require("./database/models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve user information based on the decoded token
    const user = await User.findOne({ where: { name: decoded.name } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Optionally, you can also verify the user's password or any other checks here

    // Attach the user object to the request for further processing
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
}

module.exports = {
  authenticateToken,
};
