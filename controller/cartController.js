const { Cart_Item } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllItemsInCart = catchAsync(async (req, res) => {
  const cart_items = await Cart_Item.findAll();
  res.status(200).json({
    status: "success",
    data: products,
  });
});

exports.addNewCartItem = catchAsync(async (req, res) => {
  const cart_item = await Cart_Item.create({
    userID: req.body.userID,
    productID: req.body.productID,
    cart_item_quantity: req.body.cart_item_quantity,
  });
  res.status(200).json({
    status: "success",
    data: cart_item,
  });
});

exports.getOneCartItem = catchAsync(async (req, res) => {
  const cart_item = await Cart_Item.findOne({ where: { id: req.params.id } });
  res.status(200).json({
    status: "success",
    data: cart_item,
  });
});

exports.updateCartItem = catchAsync(async (req, res) => {
  const cart_item = await Cart_Item.upsert({
    id: req.params.id,
    userID: req.body.userID,
    productID: req.body.productID,
    cart_item_quantity: req.body.cart_item_quantity,
  });
  res.status(200).json({
    status: "success",
    data: cart_item,
  });
});

exports.deleteCartItem = catchAsync(async (req, res) => {
  const cart_item = await Cart_Item.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    message: "You deleted a cart item",
  });
});
