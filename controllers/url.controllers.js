const shortid = require("shortid");
const URL = require("../models/url.models");

exports.handelGenerateNewShortURL = async (req, res) => {
  console.log("Received Body:", req.body);
  try {
    const body = req.body;
    if (!body.url) {
      return res.status(400).json({
        error: "URL is required",
      });
    }
    const shortId = shortid.generate();
    const newUrl = await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      timestamp: [],
      createdBy: req.user._id,
    });
    console.log("Short URL Created:", newUrl);
    return res.status(201).render("home", {
      id: shortId,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const shortId = req.params;
    const urlData = await URL.findOne(shortId);
    if (!urlData) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }
    //Add the timestamp
    urlData.visitHistory.push({ timestamp: Date.now() });
    await urlData.save();
    return res.redirect(urlData.redirectURL);
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.checkAnal = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
