/*
Previously we learnt how to send a HTML page to a browser, now no matter which URL you go to whether it be 
localhost:3000 or localhost:3000/about or localhost:3000/blogs, it would take us to the same HTML page 
NOTE: localhost:3000 is same as localhost:3000/
*/

/*Now I have created another 2-html pages, one about page and another 404.html file -> I will serve this 404 page to users that visit routes
that don't exist!
Now if the user types in: localhost:3000/about -> This should load the about page
if user types in: localhost:3000/blogs -> Then this should load the 404.html page, because we dont have a blogs page!*/
const { error } = require('console');
const fs = require('fs');
const http = require('http');

const server = http.createServer((request,response) =>{
    let path = './'; // All my HTML file exists in the same folder, hence I have written my path starting with './'!
    response.setHeader('Content-Type','text/html');

    switch(request.url){
        case '/': // In Request_responses.js we learnt when we search only localhost:3000, the URL that's sent back is '/' -> Which for us indicates the home page -> If the URL is home page, we just append index.html to our path!
            path += 'index.html';
            break;
        case '/about': //If the user searches/requests for about page, then we add /about to our path!
            path += 'about.html';
            break;
        case '/style.css':
            path += 'style.css';
            response.setHeader('Content-Type', 'text/css');
            break;
        default:
            path += '404.html';
            break;
    }

    //Now pass in the path of the HTML file that you have chosen in the readFile() method: -> This way the readFile method will read whichever HTML file is within the path!
    fs.readFile(path,(error,data) =>{ 
        if(error){
            console.log(error);
            response.end();
        }
        else{
            response.write(data);
            response.end();
            //We learnt previously, since we are writing only one data, this can be written as response.end(data) -> Just reduces the line of code
        }
    })
});

server.listen(3000,'localhost',() =>{
    console.log('listening to port 3000!');
});