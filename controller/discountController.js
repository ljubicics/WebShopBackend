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
  const discounts = await Discount.create({
    discount_name: req.body.discount_name,
    discount_percentage: req.body.discount_percentage,
    discount_description: req.body.discount_description,
  });
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});

exports.getOneDiscount = catchAsync(async (req, res) => {
  const discounts = await Discount.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});

exports.updateDiscount = catchAsync(async (req, res) => {
  const discounts = await Discount.upsert({
    id: req.params.id,
    discount_name: req.body.discount_name,
    discount_percentage: req.body.discount_percentage,
    discount_description: req.body.discount_description,
  });
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});

exports.deleteDiscount = catchAsync(async (req, res) => {
  const discounts = await Discount.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: discounts,
  });
});
