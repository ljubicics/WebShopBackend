const express = require("express");
const cartController = require("../controller/cartController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cartController.getAllItemsInCart
  )
  .post(
    authController.protect,
    /*authController.restrictTo("admin", "moderator"),*/
    cartController.addNewCartItem
  );

router
  .route("/:id")
  .get(
    authController.protect,
    //authController.restrictTo("admin", "moderator"),
    cartController.getCartItemsForUser
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cartController.updateCartItem
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cartController.deleteCartItem
  );

module.exports = router;
