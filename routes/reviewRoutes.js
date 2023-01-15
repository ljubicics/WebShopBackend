const express = require("express");
const reviewController = require("../controller/reviewController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    reviewController.getAllReviews
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    reviewController.addNewReview
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    reviewController.getOneReview
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    reviewController.updateReview
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    reviewController.deleteReview
  );

module.exports = router;
