const express = require("express");
const router = express.Router();

const {
  createProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} = require("../controllers/product-controller");

const {} = require("../middlewares/product");

/* createProduct Route. */
router.post("/createProduct", createProduct);

/* deleteProduct Route. */
router.delete("/deleteProduct", deleteProduct);

/* editProduct Route. */
router.patch("/editProduct", editProduct);

/* fetchAllProduct Route. */
router.get("/", fetchAllProducts);

module.exports = router;
