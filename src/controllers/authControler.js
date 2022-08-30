const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await BookModel.create(data)
      res.status(201).send({ msg: savedData })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (error) {
    res.status(500).send({ error: err.message })
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  //User Is notavialblethen 404 Error
  if (!user)
    return res.status(404).send({
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

const getUserData = async function (req, res) {
  if(userDetails){
  console.log(req.userDetails)
  res.status(201).send({ status: true, data: req.userDetails });
  }
  else{
    return res.status(404).send({ status: false, msg: "No such user exists" });
  }

};



const updateUser = async function (req, res) {
  try {
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData);
    if(updatedUser){
    res.status(201).send({ status: updatedUser, data: updatedUser });
    }
    else{
      res.status(404).send("User isnot found to update")
    }
  }
  catch (error) {
    
    res.status(500).send("SERVER ERROR")
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    if(updatedUser){
    res.status(201).send({ status: true, data: updatedUser });
  }
  else{
    res.status(404).send("User isnot found to update")
  }
  }
  catch (error) {
    
    res.status(500).send("SERVER ERROR")
  }
};




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
