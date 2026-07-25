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

router.put('/ninjas/:id',(request,response,next)=>{
    response.send({type:"PUT"}); 
});

//We can access the id from the request object, params because it is a parameter!
router.delete('/ninjas/:id',(request,response,next)=>{
    Ninja.findByIdAndDelete(request.params.id).then((data)=>{ //The findByIdAndDelete method Returns the deleted document, data is the deleted document that we are sending in as a parameter!
        response.send(data);
    });
});

module.exports = router;
