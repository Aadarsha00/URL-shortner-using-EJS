const express = require("express");
const { userSignup, userLogin } = require("../controllers/user.controllers");
const router = express.Router();
router.post("/", userSignup);
router.post("/login", userLogin);

module.exports = router;
