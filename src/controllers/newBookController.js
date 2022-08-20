const NewBookModel= require("../models/newBookModel")
const NewPublisherModel= require("../models/newPublisherModel")
const NewAuthorModel= require("../models/newAuthorModel")





let createNewBook = async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher
    const arrId = await NewAuthorModel.find().select({ _id: 1 })
    const arrPublisher = await NewPublisherModel.find().select({ _id: 1 })

    let checkAuthorID = false
    let checkPublisherID = false
// check the condition is valid Id or not
    arrId.forEach(element => {
        let authorID2 = element._id
        if (authorID2 == authorId) {
            checkAuthorID = true
            arrPublisher.forEach(element2 => {
                let publisherId2 = element2._id
                if (publisherId == publisherId2) {
                    checkPublisherID = true

                }
            });

        }
    });
    // when wrong id got send messege acording the invalid
    if (!checkAuthorID) {
        res.send("author id is not valid")
    }
    if (!checkPublisherID) res.send("publisher id is not valid")
    let bookCreated = await NewBookModel.create(book)
    res.send(bookCreated)
}
// get all the book from the database with publisher info and author
const getAllBook = async function (req, res) {
    const allBook = await NewBookModel.find().populate(['author_id', 'publisher'])
    res.send(allBook)
}
// update the value true of isHardCover 
const updateValue = async function (req, res) {
     const data = await NewPublisherModel.find({"name":["Penguin","HarperCollins"]}).select({_id:1})
    const update=await NewBookModel.updateMany({publisher:data},{isHardCover:true},{new:true})
    res.send(update);
}
// increse the price of book by 10 in range of condtion
const updatePrice = async function (req, res) {
    const data = await NewAuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
    const update=await NewBookModel.updateMany({author_id:data},{$inc:{price:+10}},{new:true})

    res.send(update);
}


module.exports.getAllBook = getAllBook
module.exports.updateValue = updateValue
module.exports.updatePrice = updatePrice
module.exports.createPublicBook= createNewBook
