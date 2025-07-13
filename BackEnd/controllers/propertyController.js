const Property = require("../models/propertyModel.js");
const generateToken = require("../utils/generateToken");

const createProperty = async (req, res) => {
  const { name, image, type, amount, picture, desc } = req.body;

  const Properties = await Property.create({
    name,
    image,
    type,
    amount,
    picture,
    desc,
  });

  if (Properties) {
    res.status(201).json({
      _id: Properties.id,
      name: Properties.name,
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

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, desc, amount, image } = req.body;

    const updatedFields = {};
    if (type !== undefined) updatedFields.type = type;
    if (desc !== undefined) updatedFields.desc = desc;
    if (amount !== undefined) updatedFields.amount = amount;
    if (name !== undefined) updatedFields.name = name;
    if (image !== undefined) updatedFields.image = image;

    const validProperty = await Property.findById(id);
    if (!validProperty) {
      return res
        .status(404)
        .json({ message: "Property with this ID not found" });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      updatedFields,
      { new: true, runValidators: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not updated" });
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error("Update failed:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    await Property.deleteOne({ _id: id });

    res.status(202).json("Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
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
  updateProperty,
  deleteProperty,
  showProperty,
};
