const express = require("express");
const { authUser, registerUser } = require("../Controllers/userController");

const router = express.Router();
router.route("/login").post(authUser);
router.route("/register").post(registerUser);

module.exports = router;
