const { User } = require("./database/models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function authenticateToken(req, res, next) {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.status(404).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const userRole = user.userType;

    let jwtSecret;

    const JWT_SECRET_USER = process.env.JWT_SECRET_USER;
    const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN;
    const JWT_SECRET_SUPER = process.env.JWT_SECRET_SUPER;

    if (!JWT_SECRET_USER || !JWT_SECRET_ADMIN || !JWT_SECRET_SUPER) {
      return res
        .status(500)
        .json({ error: "JWT secret keys are not provided" });
    }

    switch (userRole) {
      case "user":
        jwtSecret = JWT_SECRET_USER;
        break;
      case "admin":
        jwtSecret = JWT_SECRET_ADMIN;
        break;
      case "super":
        jwtSecret = JWT_SECRET_SUPER;
        break;
      default:
        return res.status(500).json({ error: "Invalid user role" });
    }

    const jwtToken = jwt.sign({ id: user.id, name: user.name }, jwtSecret);

    res.json({ message: "Welcome Back User!", token: jwtToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  authenticateToken,
};
