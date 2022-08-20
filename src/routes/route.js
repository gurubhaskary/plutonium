const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



//Assignment 19/August/2022
const NewauthorController= require("../controllers/newAuthorControler")
const NewBookController= require("../controllers/newBookController")
const NewPublisherController= require("../controllers/newPublisherController")


router.post("/createNewAuthor", NewauthorController.createPublicAuthor  )
router.post("/createNewPublisher", NewPublisherController.createPublicPublisher  )
router.post("/createNewBook", NewBookController.createPublicBook  )

router.get("/getAllBook", NewBookController.getAllBook)
router.get("/updateValue", NewBookController.updateValue)
router.get("/updatePrice", NewBookController.updatePrice)

module.exports = router;