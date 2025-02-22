const User = require("../models/user.models");
const sessionIdToUserMap = new Map();
exports.setUser = (id, user) => {
  sessionIdToUserMap.set(id, user);
};

exports.getUser = async (id) => {
  return sessionIdToUserMap.get(id);
};
