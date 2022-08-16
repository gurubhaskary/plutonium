const mongoose = require('mongoose');

const bookDetailSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        require: true
    },
    price: {
        indianPrice: String,
        europePrice: String
    },  
    year:{type:Number,
        default:2021
    },
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('bookDetail2', bookDetailSchema) //bookdetails

