/*We have different core/in-built Modules in NodeJS, os is one that we saw previously, another module is a file-system
Using NodeJs we can use its filesystem core module to do things like read files, create files and delete files on your computer 
This ability to interact with the file-system on a computer with JavaScript is something that can't be done without node*/

//We will have to import the in-built filesystem from Node
const { error } = require('console');
const fs = require('fs'); //The in-built filesystem is called `fs`

/*Read files:
fs.readfile() -> Takes in 2-arguments, 1st argument is a string it is the relative path to the file we want to read 
2nd argument is a function! This function will run when the reading is completed, The readfile method is asynchronous, 
Once we are done reading the file we will fire this callback function, Inside this callback function we take 2 things, an error and 
also the data(The stuff we will read from the data)*/
fs.readFile(`Simple_text.txt`, (error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());  
});

/*
When I try and run this file I get a buffer!
<Buffer 48 45 4c 4c 4f 20 54 48 45 52 45 21>
A buffer is a package of data that is being sent to us when we read this file!
Now if you want to see the actual string data in text format just use toString method!
Hence write: console.log(data.toString()) rather than console.log(data);  
We said readFile method is asychronous and it takes some time to execute but at the same time it does not block our code! 
The code won't wait for the readFile method to complete, it will execute all the remaining lines of code, Only once we are done reading the 
file, only then we will trigger the callback function!
*/

/*
Writing files:
use writeFile method:
2nd argument is the text we want to write
3rd argument is a callback function
*/

fs.writeFile(`Simple_text.txt`,`hello world!`, () => { //If you put in a wrong relative path, it will create a new text file for you!
    console.log(`file was written successfully!`);
})

/*
Directories: Let's say I want to create new folders called assets:
You can use the mkdir() method within the filesystem!
Again making a directory is an asynchronous task, we will make a callback function
 
fs.mkdir(`./assets`, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`folder created successfully!`)
}) 
If you try to run this code twice you will get an error! Because the folder already exists!
Hence check if the folder already exists first of all: By using the existsSync method found within the filesystem(fs)
existsSync is a synchronous method -> meaning it will wait for this task to finish and won't continue ahead, But this will take a very
small amount of time! 
If the file exists it will return true. We want to create a file only if the file does not exist hence we have used !*/

//Within if clause if the assets folder does not exist then we create it!
if(!fs.existsSync(`./assets`)){
    fs.mkdir(`./assets`, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`folder created successfully!`)
}) 
}
//Within the else clause: If the folder exists, we will delete it! use rmdir() -> Stands for remove directory
else{
    fs.rmdir(`./assets`,(error)=>{
        if(error){
            console.log(error);
        }
        console.log("Folder was deleted successfully!");
    })
}

/*
Deleting files:
Again we want to make sure if the file already exists before deleting it!
For deleting we use unlink() method!
 */
if(fs.existsSync(`DeleteMe.txt`)){ //If the file exists only then we delete it!
    fs.unlink(`./DeleteMe.txt`, (error)=>{
        if(error){
            console.log(error);
        }
        console.log(`File deleted!`);
    })
}