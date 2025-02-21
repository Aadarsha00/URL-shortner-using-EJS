require("dotenv").config();
const express = require("express");
const connectDb = require("./config/connectdb");
const app = express();
const PORT = process.env.PORT;
const urlRoute = require("./routes/url.routes");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting to database
connectDb();

//Routes
app.use("/", urlRoute);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
