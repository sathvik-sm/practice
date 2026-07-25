const express = require('express');
const app = express();

const routes = require('./1.DummyAPI'); // We are getting all the routes that are there in API module/file -> It's a middleware bcz it runs between a request and response!
app.use('/api',routes); /*In our routes we are handling requests for /ninjas, But I wanted the request to be /api/ninjas, hence within the use method I have add /api, then it will be followed by /ninjas! Instead of manually adding /api in each route in The DummyAPI file, I have just added it here in the app.use method! */

app.listen(4000,()=>{
    console.log("Listening to Port 4000");
})

