const express = require("express");
const paymentInfoController = require("../controller/paymentInfoController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, paymentInfoController.getAllPaymentInfos)
  .post(authController.protect, paymentInfoController.addPaymentInfo);

router
  .route("/:id")
  .get(authController.protect, paymentInfoController.getOnePaymentInfo)
  .patch(authController.protect, paymentInfoController.updatePaymentInfo)
  .delete(authController.protect, paymentInfoController.deletePaymentInfo);

module.exports = router;
