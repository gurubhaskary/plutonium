const express = require('express');

const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://syguru82sun:Roll123@cluster0.btfeueg.mongodb.net/guru123", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

//Assignment-----24/August/2022

// app.set('trust proxy', true);
app.use (
    function (req, res, next) {
        // IP Address
        const requestIp = require('request-ip');//Install npm i request-ip
        const clientIp = requestIp.getClientIp(req); 
        // Route LInks
        const url = require('url');
        let path = url.parse(req.url).pathname;
        //End answer With date Time Path Ip address
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'),clientIp,path)
        next();
  }
  );


// ==================================
// const requestIp = require('request-ip');
// // app.set('trust proxy', true);
// app.use (
//     function (req, res, next) {
//         //Date and Time
//         // console.log (moment().format('MMMM Do YYYY, h:mm:ss a'));
//         // IP Address
//         const clientIp = requestIp.getClientIp(req); 
//         // console.log (clientIp);

//         // Route LInks
//         const url = require('url');
//         let path = url.parse(req.url).pathname;
//         // console.log (path);
//         //End answer
//         console.log(moment().format('MMMM Do YYYY, h:mm:ss a'),clientIp,path)
//         next();
//   }
//   );
// ================================================
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


