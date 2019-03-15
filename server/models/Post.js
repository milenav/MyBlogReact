const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  author: {
    type:String,
    required: true
  },
  likes: [{
    type: String
  }],
  reviews: []
});

module.exports = mongoose.model('Post', postSchema);