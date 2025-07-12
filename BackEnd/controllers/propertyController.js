const Property = require("../models/propertyModel.js");
const generateToken = require("../utils/generateToken");

const createProperty = async (req, res) => {
  const { image, type, amount, picture, desc } = req.body;

  const Properties = await Property.create({
    image,
    type,
    amount,
    picture,
    desc,
  });

  if (Properties) {
    res.status(201).json({
      _id: Properties.id,
      image: Properties.image,
      type: Properties.type,
      amount: Properties.amount,
      desc: Properties.desc,
      token: generateToken(Properties._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occurred");
  }
};

const updateproperty = async (req, res) => {
  const { id } = req.params;

  const updatedproperty = await Property.findByIdAndUpdate(
    id,
    {
      isavailable: "false",
    },
    { new: true }
  );
  res.json(updatedproperty);
};
const deleteProperty = async (req, res) => {
  const { id } = req.params;
  await Product.deleteOne({ _id: id });
  res.status(202).json("Deleted Successfully");
};

const showProperty = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const searchTerm = req.query.search || "";
  const skip = (page - 1) * limit;

  const query = Property.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
  if (searchTerm) {
    query.or([
      { name: { $regex: new RegExp(searchTerm, "i") } }, // Search by product name (case-insensitive)
      { description: { $regex: new RegExp(searchTerm, "i") } }, // Search by product description (case-insensitive)
    ]);
  }
  const properties = await query.exec();
  const totalPropertiesCount = await Property.countDocuments({}); // Count all documents in the collection

  res.json({ properties, totalPropertiesCount });
};

module.exports = {
  createProperty,
  updateproperty,
  deleteProperty,
  showProperty,
};
