const express = require("express");
const router = express.Router();
const { user } = require("../controllers");

const { getUsers, addUser, getUser, deleteUser, updateUser } = user;

router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
