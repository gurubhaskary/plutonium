//Assignment 17/August/2022
const { count } = require("console")
const AuthorModel= require("../models/AuthorModel");
const BookModel= require("../models/BookModel1");

const AuthorcreateDetails= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const BookcreateDetails= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const GetauthorID= async function (req, res) {
    let result= await AuthorModel.find( {author_name : "Chetan Bhagat" } )
    let data = result[0].author_id
    let Book= await BookModel.find({author_id:{$eq:data}})
   res.send({msg:Book});
}


const updatePrice= async function (req, res) {
    let priceupdate= await BookModel.findOneAndUpdate( { name:"Two states" },{$set:{ price:100}},{new:true} )
    let Newprice=priceupdate.price
    let data = priceupdate.author_id
    let authorName= await AuthorModel.find({author_id:{$eq:data}}).select({author_name :1,_id:0})
    
   res.send({msg:authorName[0],Newprice});
}

const GreatPrice= async function (req, res) {
    
    let bet= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
    
    let authorName= await AuthorModel.find()
    let Auth=[]
        for(let i=0;i<bet.length;i++){
            Auth[i]= await AuthorModel.find({author_id:{$eq:bet[i].author_id}}).select({author_name :1,_id:0})
            
        }
        // var unique = Auth.filter((v, i, a) => a.indexOf(v) === i);
    res.send({msg:Auth})
}

module.exports.AuthorcreateDetails= AuthorcreateDetails
module.exports.BookcreateDetails= BookcreateDetails
module.exports.GetauthorID= GetauthorID
module.exports.updatePrice= updatePrice
module.exports.GreatPrice= GreatPrice

