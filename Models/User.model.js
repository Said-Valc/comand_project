const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  name: String,
  cash: Number,
  basket: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
  sum: Number,
});

const User = mongoose.model("User", userShema);

module.exports = User;
