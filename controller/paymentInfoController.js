const { Payment_Information } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllPaymentInfos = catchAsync(async (req, res) => {
  const paymentinfo = await Payment_Information.findAll();
  res.status(200).json({
    status: "success",
    data: paymentinfo,
  });
});

exports.addPaymentInfo = catchAsync(async (req, res) => {
  const paymentinfo = await Payment_Information.create({
    userID: req.body.userID,
    orderID: req.body.orderID,
    payment_type: req.body.payment_type,
  });
  res.status(200).json({
    status: "success",
    data: paymentinfo,
  });
});

exports.getOnePaymentInfo = catchAsync(async (req, res) => {
  const paymentinfo = await Payment_Information.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: paymentinfo,
  });
});

exports.updatePaymentInfo = catchAsync(async (req, res) => {
  const paymentinfo = await Payment_Information.upsert({
    userID: req.body.userID,
    orderID: req.body.orderID,
    payment_type: req.body.payment_type,
  });
  res.status(200).json({
    status: "success",
    data: paymentinfo,
  });
});

exports.deletePaymentInfo = catchAsync(async (req, res) => {
  const paymentinfo = await Payment_Information.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: paymentinfo,
  });
});
