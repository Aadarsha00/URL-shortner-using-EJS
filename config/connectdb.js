const DB_URL = process.env.DB_URL;
const mongoose = require("mongoose");
function connectDb() {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("error", err);
    });
}
module.exports = connectDb;
