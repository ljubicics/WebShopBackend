const { User } = require("../models");
const catchAsync = require("../utils/catchAsync");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({
    status: "okej bato",
    data: users,
  });
};
exports.getUser = catchAsync(async (req, res) => {
  const user = await User.scope("defaultScope").findOne({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({
    status: "success",
    data: {
      data: user,
    },
  });
});

exports.createUser = catchAsync(async (req, res) => {
  await User.create({
    username: req.body.username,
    password: await bcrypt.hash(req.body.password, 10),
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street: req.body.street,
    number: req.body.number,
    postal_code: req.body.postal_code,
    points: req.body.points,
    admin: req.body.admin,
    moderator: req.body.moderator,
  });

  res.status(200).json({
    status: "success",
    message: "You created a user successfully!",
  });
});
exports.updateUser = catchAsync(async (req, res) => {
  const filteredBody = filterObj(req.body, "name", "email"); // kako azurirati odredjene informacije koje su prosledjene
  const user = await User.upsert({
    id: req.params.id,
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street: req.body.street,
    number: req.body.number,
    postal_code: req.body.postal_code,
    points: req.body.points,
    admin: req.body.admin,
    moderator: req.body.moderator,
  });

  user.res.status(200).json({
    status: "success",
    message: "You updated user successfully",
  });
});
exports.deleteUser = catchAsync(async (req, res) => {
  const count = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    message: "User successfully deleted",
  });
});
exports.deleteMe = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
