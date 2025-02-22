const URL = require("../models/url.models");

//Server side rendering
exports.htmlRender = async (req, res) => {
  try {
    if (!req.user) return res.redirect("/login");
    console.log("Authenticated User ID:", req.user._id);
    const allUrls = await URL.find({ createdBy: req.user._id });
    res.render("home", {
      urls: allUrls,
      id: null,
    });
  } catch (error) {
    console.log("Error fetching URLs:", error);
    res.status(500).send("Error loading the page");
  }
};

//Signup
exports.signup = async (req, res) => {
  return res.render("signup");
};

//Login
exports.login = async (req, res) => {
  return res.render("login");
};
