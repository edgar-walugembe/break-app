const express = require("express");
const router = express.Router();

const {
  createProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} = require("../controllers/product-controller");

const {} = require("../middlewares/product");

/*pdtRole Route */
router.get("/", function (req, res) {
  res.json({ message: "products route accessed" });
});

/* createProduct Route. */
router.post("/createPdt", createProduct);

/* deleteProduct Route. */
router.delete("/deletePdt", deleteProduct);

/* editProduct Route. */
router.patch("/editPdt", editProduct);

/* fetchAllProduct Route. */
router.get("/all", fetchAllProducts);

module.exports = router;
