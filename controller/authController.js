const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const catchAsync = require("../utils/catchAsync");
const AppError = require("./../utils/appError");
const { promisify } = require("util");
const joi = require("joi");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const check = joi.object().keys({
    username: joi.string().min(3).max(15).required(),
    password: joi.string().min(3).max(15).required(), // moze da se koristi joiPasswordExtendCore da se proveri odredjena prisutnost karaktera
    email: joi.string().trim().email().required(),
    first_name: joi.string().min(3).max(15).required(),
    last_name: joi.string().min(3).max(15).required(),
    street: joi.string().min(3).max(15).required(),
    number: joi.string().min(3).max(15).required(),
    postal_code: joi.string().min(3).max(15).required(),
    points: joi.number().min(0).max(100).required(),
    admin: joi.boolean(),
    moderator: joi.boolean(),
  });

  const validate = check.validate(req.body);

  if (validate.error) {
    res.status(422).json({ msg: ValidationError.error.message });
  } else {
    const newUser = await User.create({
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

  
    const token = signToken(newUser.id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        id: req.body.id,
        user: req.body,
      },
    });
  }
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  //check if email and password exist
  if (!username || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  // check if user exists && password is correct
  const user = await User.scope("authScope").findOne({
    where: {
      username: req.body.username,
    },
  });

  // check if there is an error, if it goes past this line, then password is correct
  if (!user /*!bcrypt.compareSync(password, user.password)*/) {
    return next(new AppError("Incorrect username or password", 401));
  }

  // if everything ok, send token to client
  const token = signToken(user.id);
  res.status(200).json({
    status: "success",
    token,
  });
});

// Protects the route, to check if user is logged in
exports.protect = catchAsync(async (req, res, next) => {
  // Getting token and check if it is there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  //console.log(token);

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access", 401)
    );
  }

  // Verification token (check if token has been changed)
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exists
  const currentUser = await User.findOne({
    where: {
      id: decoded.id,
    },
  });

  if (!currentUser) {
    return next(new AppError("The user no longer exists"), 403);
  }

  // Continue to protected route
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return catchAsync(async (req, res, next) => {
    if (req.user.admin === true) {
      role = "admin";
    } else if (req.user.moderator === true) {
      role = "moderator";
    } else {
      role = "user";
    }

    if (!roles.includes(role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  });
};
