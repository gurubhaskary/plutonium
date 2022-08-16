const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


//Assigmnet 12/Aug/2022
const BookController=require("../controllers/BookController");
const BookModel = require("../models/Bookmodel");
router.post("/createBook", BookController.createBook  )
router.get("/getBookData", BookController.getBookData)

module.exports = router;