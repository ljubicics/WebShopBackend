const { City } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllCities = catchAsync(async (req, res) => {
  const cities = await City.findAll();
  res.status(200).json({
    status: "success",
    data: cities,
  });
});

exports.addNewCity = catchAsync(async (req, res) => {
  const cities = await City.create({
    countryID: req.body.countryID,
    city_name: req.body.city_name,
  });
  res.status(200).json({
    status: "success",
    data: cities,
  });
});

exports.getOneCity = catchAsync(async (req, res) => {
  const cities = await City.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: cities,
  });
});

exports.updateCity = catchAsync(async (req, res) => {
  const cities = await City.upsert({
    id: req.params.id,
    countryID: req.body.countryID,
    city_name: req.body.city_name,
  });
  res.status(200).json({
    status: "success",
    data: cities,
  });
});

exports.deleteCity = catchAsync(async (req, res) => {
  const cities = await City.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: cities,
  });
});
