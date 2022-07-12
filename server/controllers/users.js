const User = require("../models/users");

const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user, nbHits: user.length });
};

const getCodersUsers = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({ user });
};

const createNewUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
  console.log("POST", req.body);
};

module.exports = { getAllUsers, createNewUser };
