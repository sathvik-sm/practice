/*
In NodeJS we have a global object:
In vanilla JS we had something called a Window object-> Go to the browser then inspect, in the console search for window, Inside the window you will 
get many properties and method under the window object inside the browser! This window object inside the browser is the browser's global object and it has methods
like setTimeout, alert,etc. In the browser you can pop an alert after 3-seconds using setTimeout and alert!
In the console write this code:
setTimeout(() =>{
    alert(`hello)
    },3000)

Now I don't have to explicitly tell window.setTimeout -> because it is attached to the window object. Window is a global object, hence its presence is everywhere and I 
can directly write the property/method name inside the browser.

Hence in browser window is the global object, but in Node our global object is not window but the global object in Node is called 'global'


We know in Vanilla JS (Plain JavaScript without any frameworks or libraries) we have access to the window object! In window object we
can get querySelectorAll() and built in fetch! 
But in Node there is no Window object,because there is no browser!
There is concept Global variables -> You can access them anywhere in the application!
Examples of Global variables:
i)  __dirname  : Will give us absolute path to the current file that we are in!
ii) __filename : gives us absolute path of the folder with the file name added on as well!
iii) require   : require is a function which is used to access modules
iv) module     : module will be information about the current module
v) process     : it gives as an information about the environment where the program is executed.

You can console log any of these Global variables and you will get all the properties!

Note: Observe I can access to console everywhere -> Hence it is also a global variable
similarly setTimeout() and setInterval() are also global variables (Learnt them in JS!)
*/

global.setInterval(()=>{ //You dont have to necessarily access it via the gloabal because it is available everywhere!
    console.log("Hello world") //Every second it will print "Hello world" TO "STOP" IT use: ctrl + c
},1000)

setTimeout(() =>{
    console.log(`After 5-seconds!`);
},5000)

/*The other global objects are:
 __dirname  : Will give us absolute path to the current file that we are in!
 __filename : gives us absolute path of the folder with the file name added on as well!

 */
console.log(__dirname); // Output:  c:\Users\kiran\OneDrive\Desktop\Node -> Useful when we need directory to our current file, because sometimes we are interacting with different files and we need to formulate paths between them
console.log(__filename); // Output: c:\Users\kiran\OneDrive\Desktop\Node\globals.js -> The same, just that we have a filename added!

/* Global object in Node is different from the window object in JS
For example I cannot access the DOM
I cannot access the query selector: console.log(document.querySelector); ->This will give an error which says "document is not defined" because document
is in the window object and we don't have it in the global object -> We dont need access to them because we wont be interacting with webpage, we use NodeJs for backed server */