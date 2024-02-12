const express = require("express");
const router = express.Router();

const {
  createUser,
  deleteUser,
  editUser,
  fetchAllUsers,
  loginUser,
  setUserPassword,
} = require("../controllers/user-controller");

const { authUser } = require("../middlewares/user");

/*userRole Route */
router.get("/", authUser, function (req, res) {
  res.json({ message: "users route accessed" });
});

/* createUser Route. */
router.post("/createUser", createUser);

/* deleteUser Route. */
router.delete("/deleteUser", deleteUser);

/* editUser Route. */
router.patch("/editUser", editUser);

/* fetchAllUser Route. */
router.get("/all", fetchAllUsers);

/* loginUser Route. */
router.get("/login", loginUser);

/* setPassword Route. */
router.post("/setPassword", setUserPassword);

module.exports = router;
