const express = require("express");
const { htmlRender, deleteData } = require("../controllers/static.controller");
const router = express.Router();
router.get("/test", htmlRender);

module.exports = router;
