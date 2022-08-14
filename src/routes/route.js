const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/shoes", function(req, res){
    let queryParams = req.query
    let brand = queryParams.brand
   
   res.send("dummy response")

})

// uses query params
router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
    // res.send(district,gender,district)
})

// use path param
router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       //send all the films
      res.send(films) 
})

router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId

       //iterate all the films
       //search for a film whose id matches with the id recevied in request
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
               //if there is a match return the response from here
               return res.send(film)
           }
       }

       //if there is no match give an error response
       res.send("The film id doesn't match any movie")
})

//Assignment

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7];
    ///LOGIC WILL GO HERE 
    let n = arr.length;
    const total=arr.reduce((sum,x)=>sum+x);
    for(let i=0;i<n;i++){
        if(i==n-1)
        {
            nvalue=arr[i]
        }
    }
    
      let missingNumber= ((nvalue*(nvalue+1))/2)-total;  
    
    // console.log(nvalue)
    res.send({data:missingNumber});
    
});


router.get("/sol2", function (req, res) {
    // logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let n = arr.length;
    let first=0;
    let last=0;
    // const total=arr.reduce((sum,x)=>sum+x);
     for(let i=0;i<n;i++){
        if(i==n-1)
        {
            last=arr[i]
        }
        else if(i==0)
        {
            first=arr[i]
        }
    }
    ///LOGIC WILL GO HERE 
    let missingNumber= ((((n+1)*(first + last))+1)/2)-((n*(first + last))/2);
    res.send(  { data: missingNumber  }  );
});

// ========================================================
//rest post method

    let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

   router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    let flag=0;
    for(let i=0;i<players.length;i++){
    if(players[i].name===req.body.name)
    {
        flag=1;
        break;
    }
}
    
    if(flag==0){
        players.push(req.body)
        res.send(  { data: players , status: true }  )
    }
    else if(flag==1){
        res.send(  "Player name already exists"  )
    }
});

//Second Assignment

let persons =
[
    {
        "name": "pk",
        age: 10,
        votingstatus:false 
    },
    {
        "name": "sk",
        age: 20,
        votingstatus:false
    },
    {
        "name": "aa",
        age: 70,
        votingstatus:false
    },
    {
        "name": "ss",
        age: 5,
        votingstatus:false
    },
    {
        "name": "Ho",
        age: 40,
        votingstatus: false
    },
]
router.post("/vote",function(req,res){
    let eligible=[];
    for(let i=0;i<persons.length;i++){
        if(persons[i].age>req.query.votingage){
            persons[i].votingstatus=true;
            eligible.push(persons[i]);
        }
    }
    res.send(eligible);
    
   
});
module.exports = router;
// adding this comment for no reason