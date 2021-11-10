const mongoose = require("mongoose");
const { User } = require("../models/user");

// get all users
getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

// get user by id
getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user) return res.status(404).send("Record not found.");
  res.send(user);
};

// add user
addUser = async (req, res) => {
  const name = await User.findOne({ name: req.body.name });
  if (name) return res.status(400).send("Name exists.");
  let user = new User(req.body);
  await user.save();
  res.send(user);
};

// delete user
deleteUser = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid ID.");
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send("Record not found.");
  res.send("User deleted.");
};

// update  user
updateUser = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid ID.");
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select();
  if (!user) return res.status(404).send("Record not found.");
  res.send("User updated.");
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
};
