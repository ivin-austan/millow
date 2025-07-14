const express = require("express");
const {
  createProperty,
  updateproperty,
  deleteProperty,
  showProperty,
  updateProperty,
} = require("../Controllers/propertyController");
const { default: verifyToken } = require("../utils/jwtTokenValidation");

const router = express.Router();
//protected routes
router.post("/addproperty", verifyToken, createProperty);
router.post("/updateproperty/:id", verifyToken, updateProperty);
router.delete("/deleteproperty/:id", verifyToken, deleteProperty);
router.get("/fetchproperty", verifyToken, showProperty);
module.exports = router;
