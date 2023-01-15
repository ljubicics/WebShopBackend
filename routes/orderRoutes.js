const express = require("express");
const orderController = require("../controller/orderController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.protect,
    orderController.getAllOrders
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderController.addNewOrder
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderController.getOneOrder
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderController.updateOrder
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderController.deleteOrder
  );

module.exports = router;
