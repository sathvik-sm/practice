/*
MongoGeoJSON:
We will return users that are nearby, based on latitudes and longitudes

Mongo uses GeoJSON(Just a format on how to store address!) internally to handle geo-location!

I will change Schema in 7.GeoJSON_Schema.json 
*/

const express = require('express');
const router = express.Router(); 

const Ninja = require('../models/7.Mongo_GeoJSON_Schema'); 

router.get('/ninjas',(request,response)=>{  //Now in this get-handler where I will
/*
    Ninja.find({}).then((data)){ //Passing in an empty object will return all the data that is there in the data-base
        response.send(data);
    }
But we dont want to return all the data, instead we will pass in our longitude and latitude. And then search for guys that are near that
longitude and latitude co-ordinates!
We will send an URL parameter, this is not the same as request parameters that we have used before like :id
When we make a request on the URL we can add on parameters using a question mark(?) and then we specify the different key-value pair!
example: localhost:4000/api/ninjas?lng=50.45&lat=42.35 -> In this see lng is our key and its values is 50.45

Now that an user sends in his latitude and longitude, how do you find other users nearby him?
Using a method called geoNear()
the parameters for the geoNear() method are: type(in our case type is point), coordinates(which we will access through the url parameter, which we will access through something called as query string!)
Now the latitude and longitude which we will get is from query string but the Latitude/Longitude must be numbers
hence type cast them using a method called parseFloat()

 Ninja.geoNear({
        type:'Point',
        coordinates: [parseFloat(request.query.lng),parseFloat(request.query.lat)],
        maxDistance:100000, // the Max distance within which we are finding users are within 100-thousand meters/100 kilo-meters!
        spherical:true // The distance would be based on sphere not just a flat map!
    }).then((users)=>{ //geoNear returns a promise, so just tackle on a then method, and we will get all the users within a 100-thousand meters from the latitude and longitude you passed!
        response.send(users);
    })

Geo near is no-longer a function, tho use something called as aggregators:
*/
    Ninja.aggregate([ //For explainations just see the above explaination for geoNear, its the same!
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [
          parseFloat(request.query.lng),
          parseFloat(request.query.lat)
        ]
      },
      distanceField: "distance",
      spherical: true,
      maxDistance: 100000
    }
  }
]).then((users)=>{
    response.send(users);
});
});

router.post('/ninjas',(request,response,next)=>{
   Ninja.create(request.body).then((data)=>{ 
    response.send(data);
   }).catch(error =>{ 
        next(error); 
   }) 
});

router.put('/ninjas/:id',(request,response,next)=>{ 
    Ninja.findByIdAndUpdate(request.params.id,request.body).then(()=>{
        Ninja.findOne({_id:request.params.id}).then((data)=>{
            response.send(data);
        });
    });
});


router.delete('/ninjas/:id',(request,response,next)=>{
    Ninja.findByIdAndDelete(request.params.id).then((data)=>{ 
        response.send(data);
    });
});

module.exports = router;