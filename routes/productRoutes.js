const express = require("express");
const productController = require("../controller/productController");

const router = express.Router();

router.route("/").get(productController.getAllProducts);
router.route("/addProduct").post(productController.addProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
