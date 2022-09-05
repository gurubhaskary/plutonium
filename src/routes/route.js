const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

//Axios Assignment vaccination sessions by District Id
const vaccinationController=require("../controllers/vaccinationcontroller")
router.get("/Vaccination", vaccinationController.vaccination)

//Assignment on Weather
const weatherController=require("../controllers/weatherController")
router.get("/londonWeather", weatherController.londonWeather) //London Weather
router.get("/londonTemperature", weatherController.londonTemperature) //London Temperature
router.get("/citySorted", weatherController.citySorted) //Sorting City

const memeController=require("../controllers/memeController")
router.post("/Meme", memeController.Meme) //Meme Api

//Testing Async Await
let axios = require("axios")
router.post("/test",async function(req,res){
    console.log(`Hello1`)
    console.log(`Hello2`)
    console.log(`Hello3`)
    await setTimeout(() => {
        console.log(`timeout1`)
    }, 3000);
    setTimeout(() => {
        console.log(`timeout2`)
    }, 1000);
    console.log(axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=e88b54769e119f288cdfe93d8814d080`)) //O/p promise Pending
    console.log(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=e88b54769e119f288cdfe93d8814d080`))
    console.log(`Hello4`)
    console.log(`Hello5`)
    console.log(`Hello6`)
    res.send("Heello34")
})
module.exports = router;