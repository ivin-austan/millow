const express = require("express");
const {
  createProperty,
  updateproperty,
  deleteProperty,
  showProperty,
} = require("../controllers/propertyController");
const { default: verifyToken } = require("../utils/jwtTokenValidation");

const router = express.Router();
//protected routes
router.post("/addproperty", verifyToken, createProperty);
router.get("/updateproperty", verifyToken, updateproperty);
router.delete("/deleteproperty", verifyToken, deleteProperty);
router.get("/fetchproperty", verifyToken, showProperty);
module.exports = router;
