const express = require("express");
const rankingController = require("../controller/rankingController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    rankingController.getAllRankings
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    rankingController.addNewRanking
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    rankingController.getOneRanking
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    rankingController.updateRanking
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    rankingController.deleteRanking
  );

module.exports = router;
