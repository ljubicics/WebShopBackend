const { Country } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllCountries = catchAsync(async (req, res) => {
  const countries = await Country.findAll();
  res.status(200).json({
    status: "success",
    data: countries,
  });
});

exports.addNewCountry = catchAsync(async (req, res) => {
  const countries = await Country.create({
    name: req.body.name,
  });
  res.status(200).json({
    status: "success",
    data: countries,
  });
});

exports.getOneCountry = catchAsync(async (req, res) => {
  const countries = await Country.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: countries,
  });
});

exports.updateCountry = catchAsync(async (req, res) => {
  const countries = await Country.upsert({
    id: req.params.id,
    name: req.body.name,
  });
  res.status(200).json({
    status: "success",
    data: countries,
  });
});

exports.deleteCountry = catchAsync(async (req, res) => {
  const countries = await Country.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: countries,
  });
});
