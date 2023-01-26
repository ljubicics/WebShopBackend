const express = require("express");
const dotenv = require("dotenv");
const authController = require("./controller/authController");
const { sequelize } = require("./models");
const cors = require("cors");

const app = express();

dotenv.config({ path: "./config.env" });

var corsOptions = {
  origin: "localhost:8000",
  origin: "localhost:8080",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.post("/signup", authController.signup);
app.post("/login", authController.login);

app.listen({ port: 9000 }, async () => {
  await sequelize.authenticate();
});
