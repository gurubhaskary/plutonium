const mongoose = require('mongoose');

const NewPublisherSchema = new mongoose.Schema( {
    
    name: {
    type:String,
    required:true,
    unique:true
},
headQuarter: String,
}, { timestamps: true });


module.exports = mongoose.model('NewPublisherDataBase', NewPublisherSchema)
