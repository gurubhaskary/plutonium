//Assigmnet 12/Aug/2022
const BookModel= require("../models/Bookmodel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}


module.exports.createBook= createBook
module.exports.getBookData= getBookData