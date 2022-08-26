const UserProductModel= require("../models/userProductModel")

const createUserProduct= async function (req, res) {
    let data= req.body
    let savedData= await UserProductModel.create(data)
    res.send({msg: savedData})
    
}

module.exports.createUserProduct= createUserProduct