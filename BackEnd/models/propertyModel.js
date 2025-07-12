const mongoose = require("mongoose");

const propertySchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcorporatefinanceinstitute.com%2Fresources%2Fcommercial-real-estate%2Freal-estate%2F&psig=AOvVaw06Mot63g-7R6zKdu3HXkom&ust=1752387894837000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDP2eHXto4DFQAAAAAdAAAAABAE",
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
