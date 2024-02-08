let express = require("express");
let router = express.Router();

const {} = require("../controllers/product-controller");
const {} = require("../middlewares/product");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("ndi product");
});

router.post("/product", function (req, res, next) {
  res.send("respond with a resource 0000");
});

module.exports = router;
