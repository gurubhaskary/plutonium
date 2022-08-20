const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const authorSchema =new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    }, 
    price: Number,
    ratings: Number


}, { timestamps: true });

// const authorSchema = new mongoose.Schema( { 
//     authorName:"Chetan Bhagat",
//             age:50,
//             address:"New Delhi",
//     rating: 2
//         } 
//     , { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
