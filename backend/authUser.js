require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  const secretKeys = [
    process.env.JWT_SECRET_USER,
    process.env.JWT_SECRET_ADMIN,
    process.env.JWT_SECRET_SUPER,
  ];

  function tryNextSecret(index) {
    if (index >= secretKeys.length) {
      return res.sendStatus(403);
    }
    jwt.verify(token, secretKeys[index], (err, user) => {
      if (err) {
        return tryNextSecret(index + 1);
      }

      req.user = user;
      next();
    });
  }

  tryNextSecret(0);
}

module.exports = {
  authenticateToken,
};
