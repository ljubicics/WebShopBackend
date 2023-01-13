const { User_Ranking } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getAllRankings = catchAsync(async (req, res) => {
  const rankings = await User_Ranking.findAll();
  res.status(200).json({
    status: "success",
    data: rankings,
  });
});

exports.addNewRanking = catchAsync(async (req, res) => {
  const ranking = await User_Ranking.create({
    discountID: req.body.discountID,
    ranking_name: req.body.ranking_name,
  });
  res.status(200).json({
    status: "success",
    data: ranking,
  });
});

exports.getOneRanking = catchAsync(async (req, res) => {
  const ranking = await User_Ranking.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: ranking,
  });
});

exports.updateRanking = catchAsync(async (req, res) => {
  const ranking = await User_Ranking.upsert({
    id: req.body.id,
    discountID: req.body.discountID,
    ranking_name: req.body.ranking_name,
  });
  res.status(200).json({
    status: "success",
    data: ranking,
  });
});

exports.deleteRanking = catchAsync(async (req, res) => {
  const ranking = await User_Ranking.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: ranking,
  });
});
