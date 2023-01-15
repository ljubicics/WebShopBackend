const express = require("express");
const productController = require("../controller/productController");
const authController = require("../controller/authController");

const router = express.Router();

router.route("/").get(authController.protect, productController.getAllProducts);
router
  .route("/addProduct")
  .post(authController.protect, productController.addProduct);

router
  .route("/:id")
  .get(authController.protect, productController.getOneProduct)
  .patch(authController.protect, productController.updateProduct)
  .delete(authController.protect, productController.deleteProduct);

module.exports = router;
