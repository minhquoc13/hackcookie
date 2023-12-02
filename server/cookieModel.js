const mongoose = require("mongoose");

const cookieModel = new mongoose.Schema(
  {
    name: {
        type: String
    },
    value: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cookie", cookieModel);
