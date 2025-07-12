const mongoose = require("mongoose");

const propertySchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dxhpxvyih/image/upload/v1752328026/aeuvjxttjkzr0jjdzxmr.jpg",
    },
    type: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("property", propertySchema);

module.exports = User;
