const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");

const globalErrorHandler = require("./controller/errorController");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json({ limit: "10kb" }));
app.use("admin/users", userRouter);
app.use("admin/products", productRouter);

app.use(globalErrorHandler);

module.exports = app;
