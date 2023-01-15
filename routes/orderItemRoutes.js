const express = require("express");
const orderItemController = require("../controller/orderItemController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, orderItemController.getAllOrderItems)
  .post(authController.protect, orderItemController.addNewOrderItem);

router
  .route("/:id")
  .get(authController.protect, orderItemController.getOneOrderItem)
  .patch(authController.protect, orderItemController.updateOrderItem)
  .delete(authController.protect, orderItemController.deleteOrderItem);

module.exports = router;
