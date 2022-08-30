const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data)
      res.status(201).send({ msg: savedData })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};

const loginUser = async function (req, res) {
  try {
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
    res.status(201).send({ status: true, data: token });
  }
  catch (error) {

    res.status(500).send("SERVER ERROR", error.message)
  }
};

const getUserData = async function (req, res) {
  try {
    if (req.userDetails) {
      console.log(req.userDetails)
      res.status(200).send({ status: true, data: req.userDetails });
    }
    else {
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }
  }
  catch (error) {

    res.status(500).send("SERVER ERROR",error.message)
  }
};



const updateUser = async function (req, res) {
  try {
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData);
    if (updatedUser) {
      res.status(201).send({ status: updatedUser, data: updatedUser });
    }
    else {
      res.status(404).send("User is not found to update")
    }
  }
  catch (error) {

    res.status(500).send("SERVER ERROR", error.message)
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    if (updatedUser) {
      res.status(201).send({ status: true, data: updatedUser });
    }
    else {
      res.status(404).send("User is not found to update")
    }
  }
  catch (error) {
    res.status(500).send("SERVER ERROR", error.message)
  }
};




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
