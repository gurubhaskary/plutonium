const mongoose = require('mongoose');

const userProductSchema = new mongoose.Schema( {
    name: String,
    balance: {
        type:Number,
        default:100
    },
    address:String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    isFreeAppUser:Boolean
}, { timestamps: true });

module.exports = mongoose.model('userProductDataBase', userProductSchema) //userProductSchema



