const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/Ninjas');
//Set mongoose's promise to the global promise, bcz mongoose's promise is deprecated
mongoose.Promise = global.Promise; //Think of it like over-writing mongoose's promise

app.use(bodyParser.json());

const routes = require('./3.MongoDB_API'); 

app.use('/api',routes);

app.listen(4000,()=>{
    console.log("Listening to Port 4000");
});

