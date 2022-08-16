const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const BookDetailsController= require("../controllers/bookDetailsController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)


//Assignment
router.post("/createBookDetails", BookDetailsController.createBookDetails)

router.get("/bookList", BookDetailsController.bookList)

router.post("/getBooksInYear", BookDetailsController.getBooksInYear)

router.post("/getParticularBooks", BookDetailsController.getParticularBooks)

// router.get("/getXINRBooks", BookDetailsController.getXINRBooks)
 
router.get("/getRandomBooks", BookDetailsController.getRandomBooks)
module.exports = router;