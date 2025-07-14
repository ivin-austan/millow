const express = require("express");
const { authUser, registerUser } = require("../controllers/userController");

const router = express.Router();
router.route("/login").post(authUser);
router.route("/register").post(registerUser);

module.exports = router;
