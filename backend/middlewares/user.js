const { User } = require("../database/models");
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (res, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// auth a user

async function hashPassword(req, res, next) {
  try {
    if (!req.body.password) {
      return res.status(400).send({ message: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 11);

    req.body.password = hashedPassword;

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

async function authenticateToken(req, res, next) {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ where: { name } });

    // if (!user) {
    //   return res.status(404).json({ error: "Invalid username or password" });
    // }

    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   return res.status(401).json({ error: "Incorrect password" });
    // }

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
      case "User":
        jwtSecret = JWT_SECRET_USER;
        break;
      case "Admin":
        jwtSecret = JWT_SECRET_ADMIN;
        break;
      case "SuperAdmin":
        jwtSecret = JWT_SECRET_SUPER;
        break;
      default:
        return res.status(500).json({ error: "Invalid user role" });
    }

    const jwtToken = jwt.verify(
      { name: user.name, password: user.password },
      jwtSecret
    );

    res.json({ message: "Welcome Back User!", token: jwtToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  upload,
  hashPassword,
  authenticateToken,
};
