const express = require("express");
const countryController = require("../controller/countryController");
const router = express.Router();

router
  .route("/")
  .get(countryController.getAllCountries)
  .post(countryController.addNewCountry);

router
  .route("/:id")
  .get(countryController.getOneCountry)
  .patch(countryController.updateCountry)
  .delete(countryController.deleteCountry);

module.exports = router;
