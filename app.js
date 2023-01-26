const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cartRouter = require("./routes/cartRoutes");
const cityRouter = require("./routes/cityRoutes");
const countryRouter = require("./routes/countryRoutes");
const discountRouter = require("./routes/discountRoutes");
const orderRouter = require("./routes/orderRoutes");
const orderItemRouter = require("./routes/orderItemRoutes");
const paymentInfoRouter = require("./routes/paymentInfoRoutes");
const reviewsRouter = require("./routes/reviewRoutes");
const rankingRouter = require("./routes/rankingRoutes");
const productTypesRouter = require("./routes/productTypeRoutes");
const globalErrorHandler = require("./controller/errorController");
const cors = require("cors");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "10kb" }));

app.use("/admin/users", userRouter);
app.use("/admin/products", productRouter);
app.use("/admin/cart", cartRouter);
app.use("/admin/city", cityRouter);
app.use("/admin/country", countryRouter);
app.use("/admin/discount", discountRouter);
app.use("/admin/order", orderRouter);
app.use("/admin/orderitem", orderItemRouter);
app.use("/admin/paymentinfo", paymentInfoRouter);
app.use("/admin/reviews", reviewsRouter);
app.use("/admin/rankings", rankingRouter);
app.use("/admin/productTypes", productTypesRouter);

app.use(globalErrorHandler);

module.exports = app;
