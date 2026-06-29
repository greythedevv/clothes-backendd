const express = require("express");
const router = express.Router();

const {
  getAllClothes,
  getClothesById,
  createClothes,
  updateClothes,
  deleteClothes,
} = require("../controllers/clothesController");

router.get("/", getAllClothes);

router.get("/:id", getClothesById);

router.post("/", createClothes);

router.put("/:id", updateClothes);

router.delete("/:id", deleteClothes);

module.exports = router;