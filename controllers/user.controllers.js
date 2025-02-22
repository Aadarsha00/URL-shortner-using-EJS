const { v4: uuidv4 } = require("uuid");
const user = require("../models/user.models");
const { setUser } = require("../service/auth");
//Signup
exports.userSignup = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await user.create({
    name,
    email,
    password,
  });
  return res.redirect("/login");
};

//Login
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await user.findOne({ email, password });
  if (!foundUser) {
    return res.render("login", {
      error: "Invalid Username or Password",
    });
  }
  const sessionId = uuidv4();
  setUser(sessionId, foundUser);
  res.cookie("uid", sessionId);
  return res.redirect("/home");
};
