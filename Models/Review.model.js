const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  text:String,
  product : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }

});

const Review = mongoose.model("Review", reviewsSchema);

module.exports = Review;
