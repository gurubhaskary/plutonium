let axios = require("axios")

let londonWeather= async function(req,res){
    try {
        let country = req.query.q
        let MyKey = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${MyKey}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let londonTemperature= async function(req,res){
    try {
        let country = req.query.q
        let MyKey = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${MyKey}`
        } 
        //Appid: e88b54769e119f288cdfe93d8814d080 city:London
        let result = await axios(options)
        let temp=result.data.main.temp
        console.log(result.data)
        res.status(200).send({ msg: temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let citySorted=async function(req,res){
try{
    let city=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityObj=[]
    for(let i=0;i<city.length;i++){
        let obj = { city:city[i]}
        let result= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=e88b54769e119f288cdfe93d8814d080`)
        obj.temp=result.data.main.temp
        cityObj.push(obj)
    }

    let sorted= cityObj.sort(function(a,b){ return a.temp - b.temp})
    // let sorted= cityObj.sort()
    res.status(200).send({ msg: sorted })
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}

}

module.exports.citySorted=citySorted
module.exports.londonTemperature=londonTemperature
module.exports.londonWeather=londonWeather