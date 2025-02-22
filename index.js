require("dotenv").config();
const express = require("express");
const connectDb = require("./config/connectdb");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const urlRoute = require("./routes/url.routes");
const staticRoute = require("./routes/staticRouter.js");

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//EJS setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//connecting to database
connectDb();

//Routes
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
