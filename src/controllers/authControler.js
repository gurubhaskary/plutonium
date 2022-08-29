const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "FUnctionUp",
    },
    "functionup-Plutonium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req,res) {
  console.log(req.userDetails)
  res.send({ status: true, data: req.userDetails });
  
};



const updateUser = async function (req, res) {
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
 
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, {$set:{isDeleted:true}},{new:true});
    res.send({ status: true, data: updatedUser });
  };

  


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
