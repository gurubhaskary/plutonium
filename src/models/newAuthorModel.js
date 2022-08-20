const mongoose = require('mongoose');

const NewAuthorSchema = new mongoose.Schema( {
 
    authorName:{
        type:String,
        required:true,
        unique:true
    },
    age:Number,
    address:String,
    rating: Number

}, { timestamps: true });

    

module.exports = mongoose.model('NewAuthorDataBase', NewAuthorSchema)
