const { Order_Item } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllOrderItems = catchAsync(async (req, res) => {
  const orderItems = await Order_Item.findAll();
  res.status(200).json({
    status: "success",
    data: orderItems,
  });
});

exports.addNewOrderItem = catchAsync(async (req, res) => {
  const orders = await Order_Item.create({
    orderID: req.body.orderID,
    productID: req.body.productID,
    order_item_quantity: req.body.order_item_quantity,
  });
  res.status(200).json({
    status: "success",
    data: orders,
  });
});

exports.getOneOrderItem = catchAsync(async (req, res) => {
  const orders = await Order_Item.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: orders,
  });
});

exports.updateOrderItem = catchAsync(async (req, res) => {
  const orders = await Order_Item.upsert({
    id: req.params.id,
    orderID: req.body.orderID,
    productID: req.body.productID,
    order_item_quantity: req.body.order_item_quantity,
  });
  res.status(200).json({
    status: "success",
    data: orders,
  });
});

exports.deleteOrderItem = catchAsync(async (req, res) => {
  const orders = await Order_Item.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: orders,
  });
});
