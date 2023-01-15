const express = require("express");
const countryController = require("../controller/countryController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    countryController.getAllCountries
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    countryController.addNewCountry
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    countryController.getOneCountry
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    countryController.updateCountry
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "moderator"),
    countryController.deleteCountry
  );

module.exports = router;
