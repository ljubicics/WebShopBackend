const express = require("express");
const orderController = require("../controller/orderController");
const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.protect,
    orderController.getAllOrders
  )
  .post(authController.protect, orderController.addNewOrder);

router
  .route("/:id")
  .get(authController.protect, orderController.getOneOrder)
  .patch(authController.protect, orderController.updateOrder)
  .delete(authController.protect, orderController.deleteOrder);

module.exports = router;
