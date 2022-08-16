const { count } = require("console")
const BookDetailsModel= require("../models/BookDetailModel");

const createBookDetails= async function (req, res) {
    let data= req.body

    let savedData= await BookDetailsModel.create(data)
    res.send({msg: savedData})
}


const bookList= async function (req, res) {
    let allBooks= await BookDetailsModel.find().select( { bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})

}

const getBooksInYear= async function (req, res) {
     
    let BookYear= await BookDetailsModel.find({ year: { $eq: req.query.year}});
     res.send({msg: BookYear})
}

// const getParticularBooks= async function (req, res) {
//     let value = req.query.input;
//      let ParticularBooks = await BookDetailsModel.find({
//         // $or: [{bookName: value},{totalPages:value},{stockAvailable:value},{price:value},{year:value },{tags:value },{authorName:value }]
//         $in: [{bookName: value},{totalPages:value},{stockAvailable:value},{price:value},{year:value },{tags:value },{authorName:value }]
//     })
   
//      res.send({msg: ParticularBooks})
// }

const getParticularBooks= async function (req, res) {
    let obj = req.body
    let ParticularBooks =await BookDetailsModel.find({obj})
    // let key= Object.keys(obj)[0];
    // let value=obj[key]
    // let ParticularBooks =await BookDetailsModel.find({[key]:value})
    res.send({msg: ParticularBooks})
    }


const getXINRBooks= async function (req, res) {
    let InrBooks= await BookDetailsModel.find({"price.indianPrice" : { $in: ["100INR", "200INR", "500INR"] }  })
   res.send({msg:InrBooks })
}

const getRandomBooks= async function (req, res) {
    let RandomBooks= await BookDetailsModel.find({
        $or: [{totalPages:{$gt:500}},{stockAvailable:true}]
    })
   
    res.send({msg:RandomBooks })
}

module.exports.createBookDetails= createBookDetails
module.exports.bookList = bookList 
module.exports.getBooksInYear = getBooksInYear 
module.exports.getParticularBooks = getParticularBooks 
module.exports.getXINRBooks = getXINRBooks 
module.exports.getRandomBooks  = getRandomBooks  

