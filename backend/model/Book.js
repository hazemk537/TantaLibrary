const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img:{
    type:String,
    required:true
  },
  totalSells: {
    type: Number,
    default: 0
  },
  id:{
    type: Number,
    required:true,
  },
})

const Book = mongoose.model('books', bookSchema);
module.exports = Book;

