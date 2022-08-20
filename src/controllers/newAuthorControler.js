const AuthorModel= require("../models/newAuthorModel")

const createNewAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createPublicAuthor= createNewAuthor
