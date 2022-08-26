const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        required:true,
        ref: "userProductDataBase"
    }, 
    productId: {
        type: ObjectId,
        required:true,
        ref: "ProductDataBase"
    },
    amount:Number,
    isFreeAppUser: Boolean,
    date: String
}, { timestamps: true });

module.exports = mongoose.model('OrderDataBase', OrderSchema)
