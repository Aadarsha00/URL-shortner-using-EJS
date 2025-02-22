const URL = require("../models/url.models");

//Server side rendering
exports.htmlRender = async (req, res) => {
  try {
    const allUrls = await URL.find({});
    res.render("home", {
      urls: allUrls,
    });
  } catch (error) {
    console.log("Error fetching URLs:", error);
    res.status(500).send("Error loading the page");
  }
};
