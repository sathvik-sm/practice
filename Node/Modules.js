/*
RUSHA 

Modules2.js
Node uses CommonJS : Hence every file is a module(by default)
Modules: Encapsulated code (only share minimum)
If I want to run this file: Then in the terminal below I would write: node Modules.js
The question here would be: Does that mean all my application needs to be in this one file?
Ans: Yes you will execute one file but you will split your code into module, otherwise it would be insane to jam all your code in one file!
Every file in node is module -> No setup required!

*/

const names = require(`./Modules2`); 
/*The Modules that I have defined/created will always start with "./"
Observe here, using the require key-word, names is storing all the properties and methods that we exported from Modules2.js
Now whenever I want to access people I have to say names.people, If I directly want to access people then we can import/require people using destructuring!
Like the way shown below:
const { people } = require(`./Modules2.js`);
*/
const {people} = require(`./Modules2`);
console.log(names.people,names.ages) // We have john and peter as our objects!exports: { john: 'john', peter: 'peter' }, We explicitly mentioned what we wanted to export, using this no one has access to our Secret Message!

/*Now names consists of John, Peter and sayHI, you can use the property: "names" and access peter,ages,people and sayHi from names! 
OR alternatively you can use destructuring and individually get them (using require keyword): const {john} = require(`./Modules2.js`)*/
people.forEach(names.sayHi); // Observe now I can directly access people property!

/* Or directly using destructuring you can get all the properties from Modules2.js!
const { people, ages, peter,sayHi} = require(`./Modules2)

We learnt we can access Modules we created using ./
Nodejs comes with in-built Modules as shown below:
*/
const os = require(`os`);/*os is a built-in module in Node, I dont have to create a os file!
console.log(os); os is an object with a lot of information about the current operating system it is running on!
Few methods that we can use in the os objects are: os.platform() -> This will give us the platform that we are running on!
Similarly os.homedir() */


console.log(os.platform()); //Platform is windows 32
console.log(os.homedir());  // My home directory is: C:\Users\kiran

