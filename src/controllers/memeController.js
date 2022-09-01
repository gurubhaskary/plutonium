let axios = require("axios")

let Meme=async function(req,res){
try{
    //97984
    //"https://i.imgflip.com/23ls.jpg
    //181913649
    //https://i.imgflip.com/30b1gx.jpg

}
catch(error){
    res.status(500).send({ msg: err.message })
}
}

module.exports.Meme=Meme