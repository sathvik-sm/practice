/*
Now in 3.MongoDB_App.js:
In postman if I sent in data without a name field, then in the console we get a message Saying "Name field is required", because
this is the message we had defined in the Schema in MongoDB_Schema.js!

But we dont get any error message in POSTMAN, It just says error, because it doesn't know that the name-property is a required
property! HENCE We wont know what is going wrong from a front-end perspective!

We are going to do This ErrorHandling using a middleware.

Now see first we had our body-parser middleware before the route handlers-middleware, so that we get the data in the request body.

Then we have our route-handler-middleware, here an error may occur bcz we are sending in some data and trying to save it in the 
data-base. But if the data doesn't match our Schema, then our Validation will throw an error. But we dont do anything with the error
we will add another middleware below the route handlers to handle the errors, and send the response back to the client-> Telling whats wrong!

Now we learnt that Model.create() i.e Ninja.create() method returns a promise, if there is an error, we will tackle on a catch method for error handling!

What I have done:
In the 4.ErrorHandlingApp.js I am using my custom-made middleware, that will be responsible for error handling!
app.use((error,response,request,next)=>{}) -> Now the function within the use is our own made function! Notice we use this "use-keyword" for middle-wares!
Note this is error handling middleware which accepts 4-parameters! And order of these arguments matter!


In the ErrorHandlingAPI.js:
router.post('/ninjas',(request,response,next)=>{ -> This is route handler, hence only 3-parameters and we dont pass the error object!
        Ninja.create(request.body).then((data) =>{
                response.send(data);
            })
    }).catch(error =>{
            next(error); //Above see I mentioned we dont pass the error object, I also mentioned that this object err comes from the rejected Promise (Ninja.create()).It is not supplied by Express. We just pass this error object to our next middleware! 
        });

Now if there is an error, it will be caught in the catch method, now this catch method will fire a method called next(), now this
next is the middleware or function that we have defined above in 4.ErrorHandlingApp.js

The next basically means if we get an error, then we call the next middleware! And this next middleware is defined in the app.js file below the routes!

*/
const express = require('express');
const router = express.Router(); 

const Ninja = require('../models/3.MongoDB_Schema'); // Importing the Ninja model that we have created, check this file!

router.get('/ninjas',(request,response)=>{  
    response.send({type:"GET"}); 
});

router.post('/ninjas',(request,response,next)=>{
   Ninja.create(request.body).then((data)=>{ 
    response.send(data);
   }).catch(error =>{ 
        next(error); //Repeated: Above see I mentioned we dont pass the error object, I also mentioned that this object err comes from the rejected Promise (Ninja.create()).It is not supplied by Express. We just pass this error object to our next middleware! 
   }) 
});

router.put('/ninjas/:id',(request,response,next)=>{
    response.send({type:"PUT"}); 
});

router.delete('/ninjas/:id',(request,response,next)=>{
    response.send({type:"DELETE"}); 
});

module.exports = router;

