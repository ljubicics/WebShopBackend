const express = require("express");
const orderItemController = require("../controller/orderItemController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderItemController.getAllOrderItems
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderItemController.addNewOrderItem
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderItemController.getOneOrderItem
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderItemController.updateOrderItem
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    orderItemController.deleteOrderItem
  );

module.exports = router;
