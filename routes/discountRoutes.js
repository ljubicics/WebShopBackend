const discountController = require("../controller/discountController");
const authController = require("../controller/authController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    discountController.getAllDiscounts
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    discountController.addNewDiscount
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    discountController.getOneDiscount
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    discountController.updateDiscount
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    discountController.deleteDiscount
  );

module.exports = router;
