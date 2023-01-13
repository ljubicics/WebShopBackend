const express = require("express");
const rankingController = require("../controller/rankingController");
const router = express.Router();

router
  .route("/")
  .get(rankingController.getAllRankings)
  .post(rankingController.addNewRanking);

router
  .route("/:id")
  .get(rankingController.getOneRanking)
  .patch(rankingController.updateRanking)
  .delete(rankingController.deleteRanking);

module.exports = router;
