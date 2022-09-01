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
router.get("/citySorted", memeController.Meme) //Meme Api

module.exports = router;