const Validate= function ( req, res, next) {
let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });
  console.log(token);
  
next();
}

module.exports.Validate= Validate