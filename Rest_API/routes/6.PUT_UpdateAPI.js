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
        next(error); 
   }) 
});

router.put('/ninjas/:id',(request,response,next)=>{ //The 2nd argument would be whatever you want to update. The data we want to send would be sent via the request body, which will be done by body-parser!
/*
    Ninja.findByIdAndUpdate(request.params.id,request.body).then((data)=>{ //The findByIdAndUpdate, returns the data which we are updating,Hence it WON'T be sending the data that has been updated!
        response.send(data);
    });
    Hence don't tackle on a then method and take data from findIdAndUpdate.
    Instead first find and update and then find the element by id as shown below:

    You can't even send the data seperately, bcz findByIdAndUpdate is Asynchronous, it may happend that findOne will fire before it updates
Therefore tackle on a then method to findByIdAndUpdate and then execute findOne()!
    Ninja.findByIdAndUpdate(request.params.id,request.body);
    Ninja.findOne({_id:request.params.id}).then((data) =>{ 
    response.send(data);
*/
    Ninja.findByIdAndUpdate(request.params.id,request.body).then(()=>{
        Ninja.findOne({_id:request.params.id}).then((data)=>{
            response.send(data);
        });
    });
});

//We can access the id from the request object, params because it is a parameter!
router.delete('/ninjas/:id',(request,response,next)=>{
    Ninja.findByIdAndDelete(request.params.id).then((data)=>{ //The findByIdAndDelete method Returns the deleted document, data is the deleted document that we are sending in as a parameter!
        response.send(data);
    });
});

module.exports = router;
