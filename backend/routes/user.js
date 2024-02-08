let express = require("express");
let router = express.Router();

const {
  createUser,
  deleteUser,
  editUser,
  fetchAllUsers,
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

module.exports = router;
