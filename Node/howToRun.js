/*
Difference between Browser JavaScript and Node.js:
--------------------------------------------------------------------------------------------------------------------------------------------
                  Browser                                                      Node.js
--------------------------------------------------------------------------------------------------------------------------------------------
In browser JS you have access to the DOM                                   There is no access to DOM, no browser API and no fetch
Interactive apps                                                           Server Side apps
No Filesystem                                                              Filesystem 
*/

const amount = 12
if(amount >12){
    console.log(`Small number`)
}
else{
    console.log(`Large number`)
}
console.log(`hey it's my first node app!`)
/*To run this you can:
1.Directly run it in the integrated - terminal provided by VS code:
i) Use the run button
ii) Or within the integrated terminal, write: node filename.js
2. Another way is open the terminal, write the address path of this file: C:\Users\kiran\OneDrive\Desktop\Node
then write node howToRun.js -> You will get the output!*/