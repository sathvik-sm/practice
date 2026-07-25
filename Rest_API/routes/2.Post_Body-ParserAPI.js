const express = require('express');
const router = express.Router(); 

router.get('/ninjas',(request,response)=>{  
    response.send({type:"GET"}); 
});


/*When someone makes a POST request they will be sending the data to /api/ninjas, And this JSON format of data will contain the
data of our newely joined ninja. The user will be attaching the data to a request body

I will simulate this POST-request in POSTMAN, and some request in the body of the request:
Go to postman set it to a post-request and pass in the url: localhost:4000/api/ninjas and go to the body and add some data, like
this:
{
    "name":"ryu",
    "rank":"black belt"
}
then click on send, Now how do I know if we recieved this data?
Now we have sent this data to the server in the body of the request, How do we have access this data? You will have to download 
another middleware called as "Body-Parser" in the terminal just write npm install body-parser --save, the --save will add it to 
our dependencies!

We know anything that fires between a request and a response is a middleware, in this case our Route-handlers are also middleware!

Make sure to use the body-parser middleware at the top, because when the request comes in the body-parser will look into the body
of the request, its gonna take it, and attach it to the request object. Remember in these route handlers we get access to the 
request object, hence by the time the request handler reaches the below post-route handler, we will have access to the data from 
the body -> Bcz body parser has attached the data into the request object for us!

Remember the order is important! Body-parser must come first because we learnt in nodeJS middleware fires sequentially!
*/
router.post('/ninjas',(request,response)=>{ 
    console.log(request.body); // Remember from POSTMAN we are sending in a json data. And because of the body-parser middleware, the request object will contain the data, we are just logging it to the console!

    response.send({type:"POST", //I want to send this data back in the response, so that it will logged in POSTMAN also! In the next lecture I will take the body/data and send it to the data-base
        name: request.body.name,
        rank: request.body.rank
    }); 
});

router.put('/ninjas/:id',(request,response)=>{
    response.send({type:"PUT"}); 
});

router.delete('/ninjas/:id',(request,response)=>{
    response.send({type:"DELETE"});  
});

module.exports = router;