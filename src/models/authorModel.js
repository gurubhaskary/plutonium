const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( { 
    authorName:"Chetan Bhagat",
            age:50,
            address:"New Delhi",
    rating: 2
        } 
    , { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
