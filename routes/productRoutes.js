const express = require("express");
const productController = require("../controller/productController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    productController.getAllProducts
  );
router
  .route("/addProduct")
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    productController.addProduct
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    productController.getOneProduct
  )
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

module.exports = router;
