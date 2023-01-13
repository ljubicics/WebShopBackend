const express = require("express");
const cartController = require("../controller/orderItemController");
const router = express.Router();

router
  .route("/")
  .get(orderItemController.getAllOrderItems)
  .post(orderItemController.addNewOrderItem);

router
  .route("/:id")
  .get(orderItemController.getOneOrderItem)
  .patch(orderItemController.udateOrderItem)
  .delete(orderItemController.deleteOrderItem);

module.exports = router;
