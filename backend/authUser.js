const { User, Sequelize, sequelize } = require("./database/models");
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
    switch (userRole) {
      case "user":
        jwtSecret = process.env.JWT_SECRET_USER;
        break;
      case "admin":
        jwtSecret = process.env.JWT_SECRET_ADMIN;
        break;
      case "super":
        jwtSecret = process.env.JWT_SECRET_SUPER;
        break;
      default:
        break;
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
