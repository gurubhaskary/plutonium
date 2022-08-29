const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = async function(req, res, next) {
  let token = req.headers["x-auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  // console.log(token);
  let decodedToken = jwt.verify(token, "functionup-Plutonium");
  
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  }
  // console.log(decodedToken)
  req.decodedToken=decodedToken
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  req.userDetails=userDetails;
  // ===
  req.userId=userId

  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  
 next()
}


const authorise = function(req, res, next) {
  
    let userToModify=req.params.userId
    let userToLoggedIn=req.decodedToken.userId
    if(userToModify!=userToLoggedIn) return res.send({msg:"User Has No Access to the Collection"})
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise