const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "Please Enter Product description"],
  },
  price: {
    type: Number,
    require: [true, "Please Enter Product price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "Please Enter product Category"],
  },
  quantity: {
    type: Number,
    require: [true, "Please Enter product Quentity"],
    maxLength: [4, "Quentity can not exceed  4 characters"],
    default: 1,
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  review: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      commnet: {
        type: String,
        require: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
