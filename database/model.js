//even though we don't use it we need it
const connection = require('./');
const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    require: true
  },
  // _review : { type: mongoose.Schema.ObjectId, ref: 'Review' }
});
const Image = mongoose.model('Image', imageSchema);

const reviewSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  createdDate: {
    type: Date,
    require: true
  },
  message: {
    type: String,
    require: true
  },
  stars: {
    type: Number,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  descriptionTag: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  verifiedPurchase: {
    type: Boolean,
    require: true
  },
  comment: {
    type: Number,
    require: false
  },
  // _item : { type: mongoose.Schema.ObjectId, ref: 'Item' },
  images: [{ type: mongoose.Schema.ObjectId, ref: 'Image'}]
});
const Review = mongoose.model('Review', reviewSchema);

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  reviews: [{ type: mongoose.Schema.ObjectId, ref: 'Review'}]
});
const Item = mongoose.model('Item', itemSchema);

module.exports = { Image, Review, Item };