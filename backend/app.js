const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");

const { authenticateToken } = require("./authUser");

const app = express();

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//home page
app.use("/", indexRouter);

// user routes
app.use("/User/home", authenticateToken, userRouter);

//admin routes
app.use("/Admin/Dashboard", authenticateToken, indexRouter);
app.use("/Admin/Dashboard/users", authenticateToken, userRouter);

// accessible routes for both admin and user
app.use("/Admin/Dashboard/products", authenticateToken, productRouter);
app.use("/Admin/Dashboard/orders", authenticateToken, orderRouter);
app.use("/User/home/products", authenticateToken, productRouter);
app.use("/User/home/orders", authenticateToken, orderRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
