/*In this file I have just created different routes and sending a JSON text.
and The difference about express.Router() and app = express()*/
const express = require('express');
const router = express.Router(); 


//Note I have preceded api/ before every ninja/ request, just check the DummyApp.js file to know how?

router.get('/ninjas',(request,response)=>{  // Now I can easily test this GET request by searching for api/ninjas in the browser, How do you check if the post,put,delete requests are working? In a browser default request method is GET, how do you make a PUT,DELETE and POST request to check if these requests are being handled? ans POSTMAN
    response.send({type:"GET"}); //Just sending back a JSON text
});

router.post('/ninjas',(request,response)=>{
    response.send({type:"POST"}); //Just sending back a JSON text
});

router.put('/ninjas/:id',(request,response)=>{
    response.send({type:"PUT"}); //Just sending back a JSON text
});

router.delete('/ninjas/:id',(request,response)=>{
    response.send({type:"DELETE"}); //Just sending back a JSON text
});

/*Now we should be able to use these routes in the app file. 
Hence export this routes */
module.exports = router;
/*express() creates an entire Express application.
express.Router() creates a mini application (a modular router) that can be plugged into the main app.
express()

When you do:

const express = require("express");
const app = express();

app is your main server.

You use it to:

Start the server
Configure middleware
Define routes
Set view engine, static folders, etc.

Example:

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(3000);

Think of app as the entire restaurant.

express.Router()

A router is used to organize related routes.

Instead of putting 100 routes in app.js, you split them into files.

Example:

users.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("All users");
});

router.get("/:id", (req, res) => {
    res.send("User " + req.params.id);
});

module.exports = router;

Then in app.js:

const express = require("express");
const app = express();

const userRoutes = require("./users");

app.use("/users", userRoutes);

app.listen(3000);

Now these routes exist:

GET /users
GET /users/5

Notice the router doesn't start a server.

It only contains routes. */