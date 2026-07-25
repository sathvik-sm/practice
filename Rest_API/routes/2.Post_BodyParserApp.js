const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//In the 2.Post_Body-ParserAPI.js file I explain about body-parser middleware & why this should come before app.use('/api',routes);
app.use(bodyParser.json()); 


const routes = require('./2.Post_Body-ParserAPI'); 
app.use('/api',routes);
app.listen(4000,()=>{
    console.log("Listening to Port 4000");
});

