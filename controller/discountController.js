const { Discount } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllDiscounts = catchAsync(async (req, res) => {
  const discounts = await Discount.findAll();
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});

exports.addNewDiscount = catchAsync(async (req, res) => {
  const discounts = await Discount.findAll();
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});

exports.getOneDiscount = catchAsync(async (req, res) => {
  const discounts = await Discount.findAll();
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});

exports.updateDiscount = catchAsync(async (req, res) => {
  const discounts = await Discount.findAll();
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});

exports.deleteDiscount = catchAsync(async (req, res) => {
  const discounts = await Discount.findAll();
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});
