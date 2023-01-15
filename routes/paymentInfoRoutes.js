const express = require("express");
const paymentInfoController = require("../controller/paymentInfoController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    paymentInfoController.getAllPaymentInfos
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    paymentInfoController.addPaymentInfo
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    paymentInfoController.getOnePaymentInfo
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    paymentInfoController.updatePaymentInfo
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    paymentInfoController.deletePaymentInfo
  );

module.exports = router;
