const discountController = require("../controller/discountController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(discountController.getAllDiscounts)
  .post(discountController.addNewDiscount);

router
  .route("/:id")
  .get(discountController.getOneDiscount)
  .patch(discountController.updateDiscount)
  .delete(discountController.deleteDiscount);

module.exports = router;
