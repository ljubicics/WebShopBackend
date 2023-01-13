const express = require("express");
const cartController = require("../controller/cartController");
const router = express.Router();

router
  .route("/")
  .get(cartController.getAllItemsInCart)
  .post(cartController.addNewCartItem);

router
  .route("/:id")
  .get(cartController.getOneCartItem)
  .patch(cartController.updateCartItem)
  .delete(cartController.deleteCartItem);

module.exports = router;
