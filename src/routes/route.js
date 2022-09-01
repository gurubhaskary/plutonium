const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const middleWare=require("../middleware/auth")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)


//To Authenticate and Authorize the data
const authcontroller=require("../controllers/authControler")
router.post("/authusers", authcontroller.createUser)
router.post("/authlogin", authcontroller.loginUser)
router.get("/authusers/:userId",middleWare.authenticate,middleWare.authorise,authcontroller.getUserData)
router.put("/authusers/:userId",middleWare.authenticate, middleWare.authorise,authcontroller.updateUser)
router.put('/Deleteauthusers/:userId',middleWare.authenticate,middleWare.authorise, authcontroller.deleteUser)




module.exports = router;