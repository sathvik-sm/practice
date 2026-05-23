/*
Status code describes the type of response being sent to the browser and how successful the request was.
example of few request codes:
200 : means everything was okay with the request
301 : means the resource was moved permanently somewhere and this is to signify a permanent redirect
404 :  the file was Not found!
500 : Internal server error

The status code are typically in these ranges:
100 range : The status code in the 100 range are informational responses for the browser
200 range : Success code 
300 range : codes for redirects
400 range : User or Client error codes
500 range : server error codes

NOTE: To see these status code: Go to inspect then network tab! 

Now for my previous code I will set the status code:
*/

const http = require('http');
const fs = require('fs');
const { error } = require('console');
const server = http.createServer((request,response) =>{
    console.log('Request was made!');
    let path = './';
    switch(request.url){
        case '/':
            path += 'index.html';
            response.statusCode = 200; // In this case the user has searched for homepage, and they are getting back the homepage hence everything is okay, hence statusCode is 200
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/style.css':
            path += 'style.css';
            response.setHeader('Content-Type', 'text/css');
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }
    fs.readFile(path,(error,data)=>{
        if(error){
            response.write(error);
            response.end();
        }
        else{
            response.write(data);
            response.end();
        }
    })

});

server.listen(3000,'localhost',()=>{
    console.log('listening to port 3000!');
})