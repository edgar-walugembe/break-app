const express = require("express");
const router = express.Router();

const { setUserPassword } = require("../controllers/user-controller");

const { hashPassword, authenticateToken } = require("../middlewares/user");

/* setPassword Route. */
router.post("/setPassword", hashPassword, authenticateToken, setUserPassword);

/* resetPassword Route. */
router.post("/resetPassword", hashPassword, authenticateToken, setUserPassword);

/* changePassword Route. */
router.post(
  "/changePassword",
  hashPassword,
  authenticateToken,
  setUserPassword
);
