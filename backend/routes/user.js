let express = require("express");
let router = express.Router();

const {} = require("../controllers/user-controller");
const {} = require("../middlewares/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/users", function (req, res, next) {
  res.send("respond with a resource 0000");
});

module.exports = router;
