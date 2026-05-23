const http = require('http');

/*This time we want to send back a file or rather read a file and then send the data from that file as a response to the browser:
We know that we read files using the filesystem module:*/
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((request,response) =>{
    console.log(request.url,request.method);

    //Set response header:
    response.setHeader('Content-Type','text/html');

    //Sending a html file as response!
    fs.readFile('./index.html', (error,data) => {
        if(error){
            console.log(error);
            response.end(); // IF there is an error, we must end the request! hence response.end() is required here also!
        }
        else{
            response.write(data);
            response.end();
            /*Another shortcut can be: If you have only one data to be sent in response.write(), then you can send the data within the end() 
            method only as shown: response.end(data) -> In this case you dont have to write response.write(data)*/
        }
    });
});

server.listen(3000,'localhost',() =>{
    console.log("Listening to port 3000");
});
