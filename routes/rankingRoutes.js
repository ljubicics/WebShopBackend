const express = require("express");
const rankingController = require("../controller/rankingController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, rankingController.getAllRankings)
  .post(authController.protect, rankingController.addNewRanking);

router
  .route("/:id")
  .get(authController.protect, rankingController.getOneRanking)
  .patch(authController.protect, rankingController.updateRanking)
  .delete(authController.protect, rankingController.deleteRanking);

module.exports = router;
