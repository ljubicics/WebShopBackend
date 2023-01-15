const express = require("express");
const orderController = require("../controller/orderController");
const router = express.Router();

router
  .route("/")
  .get(orderController.getAllOrders)
  .post(orderController.addNewOrder);

router
  .route("/:id")
  .get(orderController.getOneOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
