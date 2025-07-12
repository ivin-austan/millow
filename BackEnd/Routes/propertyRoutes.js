const express = require("express");
const {
  createProperty,
  updateproperty,
  deleteProperty,
  showProperty,
} = require("../controllers/propertyController");
const { default: verifyToken } = require("../utils/jwtTokenValidation");

const router = express.Router();
router.route("/addproperty").post(verifyToken, createProperty);
router.route("/updateproperty").post(verifyToken, updateproperty);
router.route("/deleteproperty").delete(deleteProperty);
router.route("/fetchproperty").get(showProperty);

module.exports = router;
