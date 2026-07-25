const express = require('express');
const router = express.Router(); 

const Ninja = require('../models/3.MongoDB_Schema'); // Importing the Ninja model that we have created, check this file!

router.get('/ninjas',(request,response)=>{  
    response.send({type:"GET"}); 
});

router.post('/ninjas',(request,response)=>{
    /*
    //Whenever there is a post-request, create a new instance of the Ninja Model:
    var ninja = new Ninja(request.body); //Now the user will send all the data that needs to be filled for a ninja, we get this data from body of the request!
    ninja.save(); //Save is a mongoose method, this will go and save the instance of ninja that we created in the database, in the ninja's collection!
    */

//Instead of executing these 2-lines seperately, we can instead write this single line, create is another mongoose method:
// Its good practice to send back the data, that user has sent!
//Ninja.create returns a promise, we wait for it return a promise and then send our response. Since create() returns a promise, you can add a then() method to it!

   Ninja.create(request.body).then((data)=>{ //create method on the Ninja model, will create a new instance of a ninja using the data we recieve from the body of the request, it will save it in the database for us! Then we wait for a promise, once it is saved in the database, then we send the data that has been saved as a response. Hence we  send back the JSON data back to the user, to know everything was successful!
    response.send(data);
   });

});

router.put('/ninjas/:id',(request,response)=>{
    response.send({type:"PUT"}); 
});

router.delete('/ninjas/:id',(request,response)=>{
    response.send({type:"DELETE"}); 
});

module.exports = router;
