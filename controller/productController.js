const { Product } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllProducts = catchAsync(async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json({
    status: "success",
    data: products,
  });
});

exports.addProduct = catchAsync(async (req, res) => {
  const newProduct = await Product.create({
    product_name: req.body.product_name,
    product_type: req.body.product_type,
    product_description: req.body.product_description,
    product_material: req.body.product_material,
    product_price: req.body.product_price,
    image_url: req.body.image_url,
    product_quantity: req.body.product_quantity,
  });
  res.status(200).json({
    status: "success",
    data: newProduct,
  });
});

exports.getOneProduct = catchAsync(async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: product,
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  const count = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    message: "You deleted product m",
  });
});

exports.updateProduct = catchAsync(async (req, res) => {
  const product = await Product.upsert({
    product_name: req.body.product_name,
    product_type: req.body.product_type,
    product_description: req.body.product_description,
    product_material: req.body.product_material,
    product_price: req.body.product_price,
    image_url: req.body.image_url,
    product_quantity: req.body.product_quantity,
  });

  user.res.status(200).json({
    status: "success",
    message: "You updated product successfully",
  });
});

exports.getProductsByType = catchAsync(async (req, res) => {
  const products = await Product.findAll({
    where: {
      productTypeID: req.params.typeID,
    },
  });
  res.status(200).json({
    status: "success",
    data: products,
  });
});
