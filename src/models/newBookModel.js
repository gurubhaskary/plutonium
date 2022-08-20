const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const NewBookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        required:true,
        ref: "NewAuthorDataBase"
    }, 
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        required:true,
        ref: "NewPublisherDataBase"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }

}, { timestamps: true });



module.exports = mongoose.model('NewBookDataBase', NewBookSchema)
