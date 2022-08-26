const orderModel= require("../models/OrderModel")
const userProductModel= require("../models/userProductModel")
const ProductModel= require("../models/productModel")

const createOrder= async function (req, res) {
    let order = req.body
    let freeApp=req.value;
    let uId = order.userId
    let pId = order.productId
    const arruserId = await userProductModel.find().select({ _id: 1 });
    const arrproductId = await ProductModel.find().select({ _id: 1 });

    let checkUserID = false
    let checkProductID = false
// check the condition is valid Id or not
arruserId.forEach(element => {
        let userID2 = element._id
        if (userID2 == uId) {
            checkUserID = true
            arrproductId.forEach(element2 => {
                let checkProductID2 = element2._id
                if (pId == checkProductID2) {
                    checkProductID = true

                }
            });

        }
    });
    if (!checkProductID){
        return res.send("Product id is not valid")
    } 
    if (!checkUserID) {
        return res.send("User id is not valid")
    }
   
    // let OrderCreated = await orderModel.create(order)
    // // // res.send(OrderCreated)

    if(freeApp=='false'){
        const price=await ProductModel.find().select({price: 1, _id: 0 }) 
        const money=await userProductModel.find().select({balance: 1, _id: 0 }) 
        
        //To check balance
        if(price[0].price>money[0].balance){
            return res.send("You dont have balance to Buy the Product")
        }
        else{
            let OrderCreated = await orderModel.create(order)
            let end=money[0].balance-price[0].price
            let updateUser=await userProductModel.findByIdAndUpdate({_id:uId},{$inc:{balance:-price[0].price}},{new:true}).select({balance:1,_id:0})
            console.log(updateUser)
            const allOrders = await orderModel.find().populate(['userId', 'productId'])
            console.log(OrderCreated)
              return res.send(allOrders)
        }
    }
    else if(freeApp=='true'){
    
        req.body.isFreeAppUser=true;
        req.body.amount=0;
        let OrderCreated = await orderModel.create(order)
        return res.send(OrderCreated)

    }
}



module.exports.createOrder= createOrder