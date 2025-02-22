const { getUser } = require("../service/auth");
exports.toLoggedInUserOnly = async (req, res, next) => {
  const userUid = req.cookies.uid;

  if (!userUid) return res.redirect("/login");
  const user = await getUser(userUid);
  if (!user) return res.redirect("/login");
  req.user = user;
  next();
};
exports.checkAuth = async (req, res, next) => {
  const userUid = req.cookies.uid;

  const user = await getUser(userUid);
  req.user = user;
  next();
};
