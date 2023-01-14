const express = require("express");
const cityController = require("../controller/cityController");
const router = express.Router();

router
  .route("/")
  .get(cityController.getAllCities)
  .post(cityController.addNewCity);

router
  .route("/:id")
  .get(cityController.getOneCity)
  .patch(cityController.updateCity)
  .delete(cityController.deleteCity);

module.exports = router;
