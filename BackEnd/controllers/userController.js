const User = require("../Models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { email, password, isAdmin } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user Already Exists");
  }

  const user = await User.create({
    email,
    password,
    isAdmin,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id), //check user successfully stored and used for authentication
    });
  } else {
    res.status(400);
    throw new Error("Error Occurred");
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
};

module.exports = { registerUser, authUser };
