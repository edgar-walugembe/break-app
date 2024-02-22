const express = require("express");
const router = express.Router();

const { setUserPassword } = require("../controllers/password-controller");

const { hashPassword, authenticateToken } = require("../middlewares/user");

/*password Route */
router.get("/", function (req, res) {
  res.json({ message: "password route accessed" });
});

/* setPassword Route. */
router.post("/set_password", hashPassword);

/* resetPassword Route. */
router.post(
  "/reset_password",
  hashPassword,
  authenticateToken,
  setUserPassword
);

/* changePassword Route. */
router.post(
  "/changePassword",
  hashPassword,
  authenticateToken,
  setUserPassword
);

module.exports = router;
