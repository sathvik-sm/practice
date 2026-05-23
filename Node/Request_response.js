const http = require(`http`);
const server = http.createServer((request,response) =>{
    console.log('Request made!');
    console.log(request.url, '\n',request.method);

    /*Set header content type: I have explained about response headers below! 
    We learnt the Content-Type can be text/html/json,etc */
    response.setHeader(`Content-Type`,'text/plain');

    /*From above Content-Type it is clear that we are sending plain-text as our response.
    Use the write() method to send the data back to the browser. write() method will write to the response.
    After we write the response, we have to end the response, and let the computer know that response has ended and hence send the response
    back to the browser! */
    response.write('Hello there');
    response.end();

    /*3-steps in Response:
    1. set the header for the content-type that we are sending back to the browser
    2.write the content that you want to send back to the browser
    3.end the response, which then sends it to the browser
    
GO to the browser search for localhost:3000 -> You will get a message saying: "Hello there!
Now in the browser-> Go to inspect and then network, you will see the request that we have made, the request would be called: localhost
click on the localhost request, You can see all the properties of the response headers.*/
});

server.listen(3000,'localhost',()=>{
    console.log('Listening for requests on port 3000');
});

/*
NOTE: One thing I forgot to mention last time: Observe the message "Request made!" is logged only when I reload my webpage!
In website search: localhost:3000 -> Only once I make a request/ go to the browser, the message "Request made!" is printed!
because createServer runs everytime a request is made.

ANOTHER NOTE: If I make any changes to the code, make sure the old/previous server is closed, you close a server by typing ctrl+c in the
terminal! Hence if you make any changes to the code, close the old server and then again make the server live, by running the code. 
Otherwise without closing the server you will be just running the old server and the changes wont be reflected.

console.log(request); -> The request is a very huge object hence we are printing only few properties within the request object!
Observe the URL is: / -> It doesnt say localhost:3000  it is just one forward slash and method is a GET request!

Now instead if I searched for localhost:3000/about. Now the url would be /about. This information about URL would be useful because we want
to send back a different response dependent on the routes. 
If the URL is just a forward slash, we would want to send back an index page or homepage, if they go to /about -> we would want to send back
an about page!

We want to formulate some kind of response:
The first thing we need to formulate is "response headers", response header gives the browser, a little bit more information about what kind
of response is coming back to it, for example: What kind of data are we sending back, is it text/HTML/JSON,etc. We can also use the response
headers to do things like set cookies
*/