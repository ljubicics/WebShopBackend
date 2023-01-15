const express = require("express");
const cityController = require("../controller/cityController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cityController.getAllCities
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cityController.addNewCity
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cityController.getOneCity
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cityController.updateCity
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    cityController.deleteCity
  );

module.exports = router;
