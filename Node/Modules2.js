//The seceret will be local, wont be shared in Modules.js
const seceret = 'SUPER SECRET'

//We will share these two constants in the Modules.js
const peter = 'peter';
const people = ['yoshi','moshi','ryu','chun-li'];
const ages = [20,25,30,35];

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}


module.exports = { // If you want to export more than one property just enclose them inside a curly bracket.Inside the object there are 3 properties john,peter and sayHi module!
  peter,sayHi,people,ages
};
console.log(module)

//When you console.log(module)  Moudle is an object, we have many properties under the Module object,observe export is an object!
/*
{
  id: 'c:\\Users\\kiran\\OneDrive\\Desktop\\Node\\Modules2.js',
  path: 'c:\\Users\\kiran\\OneDrive\\Desktop\\Node',
  exports: { john: 'john', peter: 'peter', sayHi: [Function: sayHi] },
  filename: 'c:\\Users\\kiran\\OneDrive\\Desktop\\Node\\Modules2.js',
  loaded: false,
  children: [],
  paths: [
    'c:\\Users\\kiran\\OneDrive\\Desktop\\Node\\node_modules',
    'c:\\Users\\kiran\\OneDrive\\Desktop\\node_modules',
    'c:\\Users\\kiran\\OneDrive\\node_modules',
    'c:\\Users\\kiran\\node_modules',
    'c:\\Users\\node_modules',
    'c:\\node_modules'
  ],
  Symbol(kIsMainSymbol): false,
  Symbol(kIsCachedByESMLoader): false,
  Symbol(kURL): undefined,
  Symbol(kFormat): undefined,
  Symbol(kIsExecuting): true
}
   */