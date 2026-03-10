/*
    2. Use the require() function to grab sayName from the modules
*/

// import any exportable functions that we set up with module.exports using require
// const functionName = require("file-location")

// when exporting/importing a single function, this is known as a default export.  they CAN be renamed if you want
// that being said, I would only do this if there was a reason to (making the name more concise, naming conflicts, etc.)
const sayName = require("./modules/sayName");

/*
    4. Use the require() function to grab { sayHello, sayGoodBye } from the modules
*/
// import multiple functions with {}
// the name of the exported functions MUST be the same as the imported functions (names matter, order does not)
const { sayGoodbye, sayHello } = require("./modules/greetings");

const { person1, person2 } = require("./modules/people");

/*
    1. Place a console log to test
*/
// console.log("Hello Node/Express!");

/*
    3. Test the module function sayName
*/
// call the function as needed!!
sayName("Otto");
sayName("Reggie");

/*
    5. Test the module functions sayHello and sayGoodBye
*/
sayHello("Sam");
sayGoodbye("Maurice");

sayHello(person1);
sayGoodbye(person2);
