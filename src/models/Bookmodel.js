//Assigmnet 12/Aug/2022
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    bookName : String,
    authorName: String,
    category : String,
    year :Number

}, { timestamps: true });
module.exports = mongoose.model('BookDetail', bookSchema)