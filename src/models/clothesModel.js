const mongoose = require("mongoose");

const clothes = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    size: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Clothes = mongoose.model("clothes", clothes);

module.exports = Clothes;
