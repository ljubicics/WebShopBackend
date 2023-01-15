const discountController = require("../controller/discountController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, discountController.getAllDiscounts)
  .post(authController.protect, discountController.addNewDiscount);

router
  .route("/:id")
  .get(authController.protect, discountController.getOneDiscount)
  .patch(authController.protect, discountController.updateDiscount)
  .delete(authController.protect, discountController.deleteDiscount);

module.exports = router;
