let axios = require("axios")

let Meme=async function(req,res){
try{
    //97984
    //"https://i.imgflip.com/23ls.jpg
    //181913649
    //https://i.imgflip.com/30b1gx.jpg
    let template_id =req.query.template_id
    let text0 =req.query.text0
    let text1 =req.query.text1
    let username =req.query.username
    let password =req.query.password
    var options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({ msg: result.data })
}
catch(error){
    res.status(500).send({ msg: error.message })
}
}

module.exports.Meme=Meme