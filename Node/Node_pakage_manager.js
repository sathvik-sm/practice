/*
We learnt about core modules like fs(filesystem) module. There are additional packages, it can be frameworks like Express

NODEMON PACKAGE:
Nodemon package is a package that helps us create a live reload server! Now previously if we made any changes in the code! We had to stop our
server by clicking ctrl+c and then re-run the file! But using Nodemon package, I dont have to stop my server, the changes would be made 
without disturbing the server!
Go to npm then search nodemon, you will get a command line on how to install nodemon,
in my case command line: npm install -g nodemon 
just paste this command line in the terminal

OK after downloading:
Previously if I had to run this file I would go to the terminal and type: node Node_package_manager 
Now if I want to run the file: Just type nodemon Node_package_manager -> Now this will also run the file, But now it would set up a live
reload server.
----------------------------------------------------------------------------------------------------------------------------------------------

package.json and package-lock.json:

json file will keep track of any packages that we install locally to our project, and other details like project detials!
This package.lock.json file keeps track of the different dependency versions that we have installed in our project.

package.josn file keeps track of few things in our file, such as the name,version,etc. We also have a few scripts that can be runned in this
project.(Will look into them later). But importantly this package file will keep track of our project dependencies.
Dependecies means all the packages that are installed locally into this project -> These packages will become things the project depends on,
hence they are called dependencies. 

So any project you create and you will install 3rd party packages for that project, you should definetely create a package.json file 
for that project, by running npm in it.

BY the way I created the package.json file by typing: npm init in the terminal, then it will ask a series of question just keep clicking
enter!

----------------------------------------------------------------------------------------------------------------------------------------------
✅package.json vs package-lock.json:

package.json:
Stores:
package names
version ranges
Example:
"express": "^5.0.0"

package-lock.json:
Stores:
exact installed versions
dependency tree
This ensures everyone installs the exact same packages.
-----------------------------------------------------------------------------------------------------------------------------------------------
In Simple Terms:
package.json answers:
What is this project?
Which packages does it need?
How do I run it?
What version is it?
What commands are available?
-----------------------------------------------------------------------------------------------------------------------------------------------

LODASH PACKAGE:
Now we are installing an utility library called lodash -> Search for lodash in npm website:
After installing lodash, observe in the package.json file, under dependencies we will have lodash and its version number
Lets use the lodash package:
*/
const _ = require('lodash');/* Mostly lodash is named as '_'
When you import/require lodash, observe you will have a folder created called as node_modules!
Whenever install a local package into our project, its going to create a node_modules folders and all the files/folders and dependencies of 
that package will be kept inside the node_modules folder */
console.log(_.random(0,20)); //the lodash provides us with a utility method called random!

/* I will create a greet function:
const greet = ()=>{
    console.log('hello!'); 
    }
I want this function to be allowed to run only once! I can use a once method which is within the lodash package:    
*/
const greet = _.once(()=>{
    console.log('Hello!');
});

greet();
greet(); // The once() method wont allow it to run it twice!
/*
-----------------------------------------------------------------------------------------------------------------------------------------------
SHARING CODE:
Another good thing about NPM and package.json is that it allows us to easily share the project code:
Now to share my code: I can email it or upload it to git, but this node_modules folder can be very huge -> With loads of different packages
and dependencies -> I just want to send the project code! 
Now if someone downloads my code, and tries to run it, they will get an error because I wont be uploading node_modules folder! Hence the guy
who downloads my code will not have the required packages

BUt in the package.json we have all the dependencies -> Hence we know the different packages we need to install, 
Now I dont have to install all the packages individually, when I have a package.json file, I just have to type: npm install and hit enter
and the computer will look into the package.json file, and into the dependencies property -> And it will install all the dependencies required

*/
