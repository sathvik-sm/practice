const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/Ninjas');

mongoose.Promise = global.Promise; 

app.use(bodyParser.json());

const routes = require('./7.GeoLocationJsonAPI'); 

app.use('/api',routes);

app.use((error,request,response,next)=>{
    console.log(error); 
    response.status(422).send({ 
        message: error.message,
        name: error.name
    }
    ); 
});

app.listen(4000,()=>{
    console.log("Listening to Port 4000");
});

