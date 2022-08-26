const middleWare= function ( req, res, next) {
    let header=req.headers.isfreeappuser
    
    if(header){
     req.value=header;
    next();
    }
    else{
    res.send("request is missing a mandatory header: isFreeAppUser")
    }
}

module.exports.middleWare= middleWare