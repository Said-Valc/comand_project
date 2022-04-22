const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
