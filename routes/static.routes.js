const express = require("express");
const {
  htmlRender,
  signup,
  login,
} = require("../controllers/static.controller");
const router = express.Router();
router.get("/home", htmlRender);
router.get("/signup", signup);
router.get("/login", login);
module.exports = router;
