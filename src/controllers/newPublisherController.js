const PublisherModel= require("../models/newPublisherModel")

const createNewPublisher= async function (req, res) {
    let Publisher = req.body
    let PubisherCreated = await PublisherModel.create(Publisher)
    res.send({data: PubisherCreated})
}

module.exports.createPublicPublisher= createNewPublisher
