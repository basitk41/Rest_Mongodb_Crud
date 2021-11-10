const express = require("express");
const router = express.Router();
const controller = require("../controllers");

const { getUsers, addUser, getUser, deleteUser, updateUser } = controller.user;

router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
