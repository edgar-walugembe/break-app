let express = require("express");
let router = express.Router();

const {} = require("../controllers/order-controller");
const {} = require("../middlewares/order");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("ndi order");
});

router.post("/order", function (req, res, next) {
  res.send("respond with a resource 0000");
});

module.exports = router;
