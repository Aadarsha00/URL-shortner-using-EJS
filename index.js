require("dotenv").config();
const express = require("express");
const connectDb = require("./config/connectdb");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
//cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());
//requiring Route
const urlRoute = require("./routes/url.routes");
const staticRoute = require("./routes/static.routes.js");
const userRoute = require("./routes/user.routes.js");
const {
  toLoggedInUserOnly,
  checkAuth,
} = require("./middleware/auth.middleware.js");

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//EJS setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//connecting to database
connectDb();

//Routes
app.use("/url", toLoggedInUserOnly, urlRoute);
app.use("/", checkAuth, staticRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
