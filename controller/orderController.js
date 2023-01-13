const { Order } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllOrders = catchAsync(async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).json({
    status: "success",
    data: orders,
  });
});

exports.addNewOrder = catchAsync(async (req, res) => {
  const order = await Order.create({
    userID: req.body.userID,
    pickup_in_store: req.body.pickup_in_store,
  });
  res.status(200).json({
    status: "success",
    message: "You created a new order",
  });
});

exports.getOneOrder = catchAsync(async (req, res) => {
  const order = await Order.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: order,
  });
});

exports.updateOrder = catchAsync(async (req, res) => {
  const order = await Order.upsert({
    id: req.params.id,
    userID: req.body.userID,
    pickup_in_store: req.body.pickup_in_store,
  });
  res.status(200).json({
    status: "success",
    data: order,
  });
});

exports.deleteOrder = catchAsync(async (req, res) => {
  const orders = await Order.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: orders,
  });
});
