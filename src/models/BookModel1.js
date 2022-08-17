//Assignment 17/August/2022
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( { 
            name:String,
            author_id:{
                type:Number,
                require:true
            },
            price:Number,
            ratings:Number,
        } ,
 { timestamps: true });


module.exports = mongoose.model('Books', BookSchema) //Books
