const { Product, Sequelize, sequelize } = require("../database/models");

// create new product
async function createProduct(req, res) {
  try {
    await uploadProductImage(req, res);

    const product = await Product.create({
      ...req.body,
      img: req.file ? req.file.filename : null,
    });

    return res.status(201).json({ product });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

// get all products
async function fetchAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    return res.status(200).send({ products });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

// delete a product
async function deleteProduct(req, res, next) {
  try {
    const productId = req.query.id;

    const product = await Product.findOne({ where: { id: productId } });
    if (product) {
      await product.destroy();
      return res
        .status(202)
        .send(`product id: ${productId} deleted successfully`);
    } else {
      return res.status(404).send(`product id: ${productId} not found`);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

// edit a product
async function editProduct(req, res, next) {
  try {
    const productId = parseInt(req.query.id);

    const editedData = req.body;

    const [editedRows] = await Product.update(editedData, {
      where: { id: productId },
    });

    const editedProduct = await Product.findOne({ where: { id: productId } });

    if (editedRows === 0) {
      return res.status(304).send(`product id: ${productId} not changed`);
    } else {
      return res.status(202).send({
        message: `product id: ${productId} updated successfully`,
        product: editedProduct,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
}

async function uploadProductImage(req, res, next) {
  try {
    if (!req.file) {
      return res.status(404).json({ error: "No file provided" });
    }
    const fileName = req.file.filename;
    res
      .status(200)
      .json({ message: `Product Image ${fileName} uploaded successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
  uploadProductImage,
};
