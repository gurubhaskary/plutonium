const express = require('express');
const router = express.Router();
// ===========================================

//Assignment 25/August/2022
const ProductController=require("../controllers/ProductController")
const UserProductController=require("../controllers/UserProductController")
const OrderController=require("../controllers/OrderController")
const Middle = require("../middlewares/HeaderMiddleware")

router.post("/createProduct", ProductController.createProduct)
router.post("/createUserProduct",Middle.middleWare,UserProductController.createUserProduct)
router.post("/createOrder",Middle.middleWare,OrderController.createOrder)


module.exports = router;