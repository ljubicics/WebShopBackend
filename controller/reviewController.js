const { Review } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllReviews = catchAsync(async (req, res) => {
  const reviews = await Review.findAll();
  res.status(200).json({
    status: "success",
    data: reviews,
  });
});

exports.addNewReview = catchAsync(async (req, res) => {
  const review = await Review.create({
    userID: req.body.userID,
    productID: req.body.productID,
    review_title: req.body.review_title,
    review_text: req.body.review_text,
    review_rating: req.body.review_rating,
  });
  res.status(200).json({
    status: "success",
    data: review,
  });
});

exports.getOneReview = catchAsync(async (req, res) => {
  const review = await Review.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: review,
  });
});

exports.updateReview = catchAsync(async (req, res) => {
  const review = await Review.upsert({
    id: req.params.id,
    userID: req.body.userID,
    productID: req.body.productID,
    review_title: req.body.review_title,
    review_text: req.body.review_text,
    review_rating: req.body.review_rating,
  });
  res.status(200).json({
    status: "success",
    data: review,
  });
});

exports.deleteReview = catchAsync(async (req, res) => {
  const review = await Cart_Item.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: review,
  });
});
