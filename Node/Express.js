/*
Previously we wrote a code to serve a few different HTML pages -> In this case it was easy but if start adding more complex routes or handling
post requests from forms, generally add more server-side logic, then it will get very messy to organise. Express is a framework that helps us
to easily manage our routing requests, server-side logic and responses in an elegant way!
*/
const express = require('express'); // This will return a function and we are storing it in express 

//creating express app:
const app = express(); // We are invoking the express function, to create an instance of an express app, which we are storing in the constant called app!

//listen for requests:
app.listen(3000,'localhost',() =>{
    console.log('Listening to Port 3000!');
}); 
/*
app.listen() also returns us an instance of a server, 
Like the way we did in node previously, when we created the server
const server = http.createServer((request,response) =>{
    response.setHeader('Content-Type','text/html');
    });
http.createServer() returns a server object.
server bject contains methods like:
listen()
close()
on()
Because createServer() returns a server object:
server.listen(3000); -> Hence this line works!

We could store the app.listen() in a constant, in case if you want to reuse the server later for something like WebSockets.
Like the way we have done in node, where server stores the whatever is returned by createServer!
----------------------------------------------------------------------------------------------------------------------------------------------
What are WebSockets? (NOT NEEDED, JUST FOR INFO):
WebSockets are a technology that allows two-way real-time communication between:
a browser (client)
and a server
using a single persistent connection.

Normal HTTP Communication
In normal HTTP:
Browser sends request
Server sends response
Connection closes

Example:
You refresh Instagram
Browser requests new posts
Server responds
Done
The server cannot continuously talk to the browser after responding.

Problem With HTTP:
Suppose you want:
live chat
multiplayer games
stock market updates
live notifications
WhatsApp-style messaging

With normal HTTP, the browser would need to repeatedly ask:

Any new messages?
Any new messages?
Any new messages?

This is inefficient.
WebSockets Solution
WebSockets create a persistent open connection.

After connection:
client can send data anytime
server can send data anytime
no repeated requests needed
Communication becomes full-duplex (both directions simultaneously).

Simple Analogy
HTTP
Like sending letters through post office.
Every message:
new envelope
new delivery
separate communication

WebSockets
Like staying on a phone call.
Both people can talk instantly anytime.

*/

/* 

app.listen(3000,'localhost');  This line of code has set up an express app and listening for requests at port 3000: 

Respond to request: app.get(), the get method will listen to any get request!
The first argument is what path/url you want to listen to, if you want to listen to about path just pass in '/about', like the way
we did in node with switch cases! 
The 2nd argument is a function that takes in request and response object! Again the request object contains manny information such
as the type of request, the url,etc. -> Already learnt!
We can use the response object to send a response object, we can send response like we did previously
by using the write and end method: response.write() and response.end()
But now that we are using express, we can use a 3rd method called: send() method. The good thing about send() method is that it infers
the type of content we are trying to send to the browser, so it automatically sets the content-type header!
previously we wrote: response.setHeader('Content-Type','tect/html'); -> Now we dont have to write this line of code anymore because 
express does it for automatically,depending on the type of content we send back.
Another benifit is that it also infers the status code, so we dont need to manually set the status code!
*/
app.get('/',(request,response) =>{
    response.send('<p>Home Page </p>2');
    console.log('request made');
});

/*NOTE: 
Since we have downloaded nodemon package:
previously we ran the file by running the file, this would make the server live! And then we would go to browser and localhost:3000
Now if you want a server that makes changes whenever there are changes made in the file, then run the file by writing
nodemon filename in the terminal! In this case write: nodemon Express in the terminal */