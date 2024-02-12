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
    jwt.verify(token, secretKeys[index], async (err, user) => {
      if (err) {
        return tryNextSecret(index + 1);
      }

      try {
        const hashedPassword = await getPasswordFromDatabase(user.username);
        const isPasswordValid = await bcrypt.compare(
          user.password,
          hashedPassword
        );
        if (isPasswordValid) {
          req.user = user;
          next();
        } else {
          res.sendStatus(403);
        }
      } catch (error) {
        console.error("Error:", error);
        res.sendStatus(500);
      }
    });
  }

  tryNextSecret(0);
}

module.exports = {
  authenticateToken,
};
