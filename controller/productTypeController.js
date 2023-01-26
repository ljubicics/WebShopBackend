const { Product_Type } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllProductTypes = catchAsync(async (req, res) => {
  const products = await Product_Type.findAll();
  res.status(200).json({
    status: "success",
    data: products,
  });
});
