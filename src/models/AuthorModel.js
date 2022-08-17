//Assignment 17/August/2022
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema( {
        author_id:{
            type:Number,
            require:true
        },
        author_name:String,
        age:Number,
        address:String
    
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema) //Author

