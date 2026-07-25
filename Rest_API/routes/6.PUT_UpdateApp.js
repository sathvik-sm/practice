const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/Ninjas');
//Set mongoose's promise to the global promise, bcz mongoose's promise is deprecated
mongoose.Promise = global.Promise; //Think of it like over-writing mongoose's promise

app.use(bodyParser.json());

const routes = require('./6.PUT_UpdateAPI'); 

app.use('/api',routes);

//Error handling middleware: (Observe it comes below the routes-middleware!)
app.use((error,request,response,next)=>{
    console.log(error); //This will be a very large error!
    response.status(422).send({ //Error 422 is for Unprocessable Entity:
        message: error.message, //We send the user/client just the message and name property  within the error object
        name: error.name
    }
    ); 
});

app.listen(4000,()=>{
    console.log("Listening to Port 4000");
});

