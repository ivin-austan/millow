const express = require("express");
const {
  createProperty,
  updateproperty,
  deleteProperty,
  showProperty,
  updateProperty,
} = require("../controllers/propertyController");
const { default: verifyToken } = require("../utils/jwtTokenValidation");

const router = express.Router();
//protected routes
router.post("/addproperty", verifyToken, createProperty);
router.post("/updateproperty/:id", verifyToken, updateProperty);
router.delete("/deleteproperty/:id", verifyToken, deleteProperty);
router.get("/fetchproperty", showProperty);
module.exports = router;
