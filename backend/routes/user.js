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

const {} = require("../middlewares/user");

/* createUser Route. */
router.post("/createUser", createUser);

/* deleteUser Route. */
router.delete("/deleteUser", deleteUser);

/* editUser Route. */
router.patch("/editUser", editUser);

/* fetchAllUser Route. */
router.get("/", fetchAllUsers);

/* loginUser Route. */
router.get("/login", loginUser);

/* setPassword Route. */
router.post("/setPassword", setUserPassword);

module.exports = router;
