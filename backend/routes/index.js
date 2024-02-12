const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../authUser");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  res.json({ message: "login page" });
});

router.get("/Admin/Dashboard", authenticateToken, function (req, res) {
  if (req.user.role !== "admin") return res.sendStatus(403);
  res.json({ message: "Admin route accessed" });
});

router.get("/User/home", authenticateToken, function (req, res) {
  if (req.user.role !== "user") return res.sendStatus(403);
  res.json({ message: "User route accessed" });
});

module.exports = router;
