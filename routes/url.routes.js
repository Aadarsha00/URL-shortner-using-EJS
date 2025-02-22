const express = require("express");
const {
  handelGenerateNewShortURL,
  getById,
  checkAnal,
} = require("../controllers/url.controllers");

const router = express.Router();

router.post("/", handelGenerateNewShortURL);
router.get("/:shortId", getById);
router.get("/analytics/:shortId", checkAnal);

module.exports = router;
