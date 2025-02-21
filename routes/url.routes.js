const express = require("express");
const {
  handelGenerateNewShortURL,
  getById,
  checkAnal,
} = require("../controllers/url.controllers");
const router = express.Router();

router.post("/url", handelGenerateNewShortURL);
router.get("/url/:shortId", getById);
router.get("/url/analytics/:shortId", checkAnal);
module.exports = router;
