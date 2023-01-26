const express = require("express");
const productTypeController = require("../controller/productTypeController");

const router = express.Router();

router.route("/").get(productTypeController.getAllProductTypes);

module.exports = router;
