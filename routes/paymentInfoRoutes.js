const express = require("express");
const paymentInfoController = require("../controller/paymentInfoController");

const router = express.Router();

router
  .route("/")
  .get(paymentInfoController.getAllPaymentInfos)
  .post(paymentInfoController.addPaymentInfo);

router
  .route("/:id")
  .get(paymentInfoController.getOnePaymentInfo)
  .patch(paymentInfoController.updatePaymentInfo)
  .delete(paymentInfoController.deletePaymentInfo);

module.exports = router;
