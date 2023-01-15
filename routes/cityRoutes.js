const express = require("express");
const cityController = require("../controller/cityController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, cityController.getAllCities)
  .post(authController.protect, cityController.addNewCity);

router
  .route("/:id")
  .get(authController.protect, cityController.getOneCity)
  .patch(authController.protect, cityController.updateCity)
  .delete(authController.protect, cityController.deleteCity);

module.exports = router;
