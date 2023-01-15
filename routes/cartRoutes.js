const express = require("express");
const cartController = require("../controller/cartController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, cartController.getAllItemsInCart)
  .post(authController.protect, cartController.addNewCartItem);

router
  .route("/:id")
  .get(authController.protect, cartController.getOneCartItem)
  .patch(authController.protect, cartController.updateCartItem)
  .delete(authController.protect, cartController.deleteCartItem);

module.exports = router;
