const express = require("express");
const dotenv = require("dotenv");
const authController = require("./controller/authController");
const { sequelize } = require("./models");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

dotenv.config({ path: "./config.env" });

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors(corsOptions));
app.use(express.json());

app.post("/register", authController.signup);
app.post("/login", authController.login);

app.listen({ port: 9000 }, async () => {
  await sequelize.authenticate();
});
