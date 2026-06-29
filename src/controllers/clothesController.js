const Clothes = require("../models/clothesModel");

// GET all clothes
const getAllClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find({});
    res.status(200).json({ clothes });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// GET one cloth
const getClothesById = async (req, res) => {
  try {
    const { id } = req.params;

    const clothes = await Clothes.findById(id);

    if (!clothes) {
      return res.status(404).json({
        message: "Clothing item not found",
      });
    }

    res.status(200).json({ clothes });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// CREATE cloth
const createClothes = async (req, res) => {
  try {
    const clothes = await Clothes.create(req.body);

    res.status(201).json({ clothes });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// UPDATE cloth
const updateClothes = async (req, res) => {
  try {
    const { id } = req.params;

    const clothes = await Clothes.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!clothes) {
      return res.status(404).json({
        message: "Clothing item not found",
      });
    }

    res.status(200).json({ clothes });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// DELETE cloth
const deleteClothes = async (req, res) => {
  try {
    const { id } = req.params;

    const clothes = await Clothes.findByIdAndDelete(id);

    if (!clothes) {
      return res.status(404).json({
        message: "Clothing item not found",
      });
    }

    res.status(200).json({
      message: "Clothing item deleted successfully",
      clothes,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllClothes,
  getClothesById,
  createClothes,
  updateClothes,
  deleteClothes,
};