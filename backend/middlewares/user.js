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

function authenticateToken(req, res, next) {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) return res.status(401).send({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET_SUPER, (err, user) => {
    if (err) return res.status(403).send({ message: "Forbidden" });
    req.user = user;
    next();
  });
}

module.exports = {
  upload,
  hashPassword,
  authenticateToken,
};
