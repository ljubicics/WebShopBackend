const express = require("express");
const countryController = require("../controller/countryController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, countryController.getAllCountries)
  .post(authController.protect, countryController.addNewCountry);

router
  .route("/:id")
  .get(authController.protect, countryController.getOneCountry)
  .patch(authController.protect, countryController.updateCountry)
  .delete(authController.protect, countryController.deleteCountry);

module.exports = router;
