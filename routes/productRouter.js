const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProduct,
  deleteProduct,
  getProductByID,
} = require("../controller/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/products/:id").get(getProductByID);

router.route("/products").post(createProducts);

router.route("/products/:id").put(updateProduct);

router.route("/products/:id").delete(deleteProduct);

module.exports = router;
