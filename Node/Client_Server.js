/*
How does communication between the browser and server work?
On a simple level we type a website address into a browser and then we hit enter -> This sends a request to a server that is powering that
particular website. The server then looks at the request and then decides what to send back to the browser, in most cases it will respond
with a html page and then it will be displayed.
When we type in a web address or a domain name into a browser, how does the browser know to send a request to the correct server, because
there will be millions of server powering millions of website on the internet. ans IP addresses and domain

IP address: Every computer connected to an internet have an unique IP address. 
Some special computers known as host, meaning they host websites on the internet. If you create and publish a website it will be posted
on a computer -> And this computer will have an IP address to identify! If you want to connect to a server on that host computer -> We need
to know its IP address to do it. Then we can type in the IP address in the browser to connect to the server!
IP addresses are numbers and obvio its difficult to remember numbers and hence we have a domain name! When we search for a domain name, the
browser will look-up the IP address associated with the domain name!
This type of request: Where we type something into the browser -> This is called a "GET" request! Hence a GET request is made everytime when
we go to a different web-page, either by a link or directly typing the address bar!

POST request: Normally used to send data to a server from a web forum

This communication between the server and the client is via HTTP: Hyper Text Transfer Protocol -> Set of instructions on how communication
occurs! Same as we humans have language to communicate
*/

/* How to create a server: In Node we have to create a server and this server lives on the backend of our website. 
This server listens for a request from a browser and decide what response to be sent. 
We will create a local server on our computer which will actively listen for a request and respond to it! 

we will have to import/require the http module:
*/
const http = require(`http`);
const server = http.createServer((request,response) =>{
    console.log(`request made!`);
}); 
/*The createServer method creates a server, we are storing instance of server, within the server variable.
As an argument createServer method takes in a callback function. This callback function is going to run everytime a request comes in to our server
Lets say we request the home-page and we go to www.mywebsite.com and it sends a request to this server and this function is going to run 
and send it to the home page. 
Inside this function we get access to 2-different objects: request object and response object
This request object comes in loaded full of information about the request such as the URL that is being requested!
If I search mywebsite.com then I will be able to find that URL from this request object, to see where they have come from! Also we get
information about the request type: Whether it is a GET request or a POST request.
Response object is actually used to s54end a response to the user in the browser
We will log a message to the console whenever a request comes in.

This server does not do anything, it is not actively listening for requests, to do that, invoke the listen():
The listen method takes an argument of a port number, and second argument is the host name, the default value of the host
name is localhost. 3rd argument is a function, this function will fire when we start listening 
*/

server.listen(3000,'localhost', ()=>{
    console.log('listening for request on port 3000');
})
/*
What are localhost and port numbers!

Localhost is like a domain name that we use on web, example google.com
But this port number will take us to a very specific IP address called a "Loopback IP address" -> This IP address is "127.0.0.1" and this 
directly points back to our own computer. That means when we connect to a local host domain in a browser, the browser is connecting back to
our own computer, which is acting as a host for our website!

Port number represents a specific channel gateway or port on our computers, that a certain software or server should communicate through
for example: WhatsApp and Instagram, you send and recieve data -> Now all these software do this communication via different port number to
keep information seperate from one another. 
Our server also needs a port number to communicate through.
The most common port number is 3000 for local web development. As long as port number being used by me does not clash with port number
being used by another program, it is fine to use!
When we use local host, we also type the port number of 3000 after a colon, in the address bar! Hence browser will know to connect to our 
own computer via this particular 3000 port number -> Where the server is going to be listening!

Observe one thing: Once you run the program, The program does not finish, the program is kinda waiting for a request! Because the server is live
If you want the server to not listen anymore, just write ctrl+c in the terminal.

Go to browser and search for localhost:3000 -> You will not get any response -> You will just see the loading icon swirling, and waiting for
the server to respond. But we never actually respond but see you do see a log in console, that says 'request made' -> Hence we know that a 
request has been made, just that we are not sending a response back to the browser.

NOTE: The message request made is printed only in the terminal below in VS code but if you go to the browser and then inspect
the console, you will see no message. That is because this code is running on the server and not in the browser -> Obvio it will not log 
the message to the console in the browser. The code is running in front-end and not back-end!

We learnt:
We know how to create a server and listen for request and how to fire a function when a request comes in. 
How to send response -> Will learn later
*/