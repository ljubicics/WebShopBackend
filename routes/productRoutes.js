const express = require("express");
const productController = require("../controller/productController");
const authController = require("../controller/authController");

const router = express.Router();

router.route("/").get(productController.getAllProducts);
router
  .route("/addProduct")
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    productController.addProduct
  );

router
  .route("/:id")
  .get(authController.protect, productController.getOneProduct)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    productController.updateProduct
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    productController.deleteProduct
  );

router.route("/byType/:typeID").get(productController.getProductsByType);

module.exports = router;
