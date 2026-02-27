// ================= TOPIC 35: ES6 MODULES (import/export) =================

// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files
//              Write reusable code for many different apps
//              import/export keywords

// ------------ EXPORTING (in mathUtils.js) ------------
/*
// Named exports (can have multiple per file)
export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

// Or export all at once:
const PI = 3.14159;
function getCircumference(radius){ return 2 * PI * radius; }
function getArea(radius){ return PI * radius * radius; }

export {PI, getCircumference, getArea};
*/

// ------------ DEFAULT EXPORT (only one per file) ------------
/*
// In calculator.js
export default function add(a, b){
    return a + b;
}

// OR
function add(a, b){
    return a + b;
}
export default add;
*/

// ------------ IMPORTING ------------
/*
// Import named exports (must use same names)
import {PI, getCircumference, getArea} from './mathUtils.js';

console.log(PI);
console.log(getCircumference(10));
console.log(getArea(10));

// Import and rename
import {PI as pi} from './mathUtils.js';

// Import all named exports
import * as MathUtils from './mathUtils.js';
console.log(MathUtils.PI);
console.log(MathUtils.getArea(10));

// Import default export (can name it anything)
import add from './calculator.js';
console.log(add(5, 3));

// Import both default and named
import add, {PI, getArea} from './mathUtils.js';
*/

// ------------ How it's used in React ------------
/*
// Component.js
export default function MyComponent(){
    return <div>Hello</div>;
}

// App.js
import MyComponent from './Component.js';

function App(){
    return <MyComponent />;
}
*/


// ================= TOPIC 36: JSON =================

// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files: {key:value} OR [{}, {}, {}]

// JSON is TEXT, not a JavaScript object
// Must convert JSON to JS object to use it

const jsonString = `{
    "name": "Umer Azmi",
    "age": 23,
    "isEmployed": true,
    "hobbies": ["coding", "gaming"]
}`;

// ------------ JSON.parse() ------------
// Converts JSON string to JavaScript object
const jsonObject = JSON.parse(jsonString);

console.log("Parsed JSON object:", jsonObject);
console.log("JSON object - name property:", jsonObject.name);
console.log("JSON object - first hobby:", jsonObject.hobbies[0]);

// ------------ JSON.stringify() ------------
// Converts JavaScript object to JSON string
const person4 = {
    name: "Umer Azmi",
    age: 23,
    isEmployed: true
};

const jsonStr = JSON.stringify(person4);
console.log("JSON.stringify() - Converted to JSON string:", jsonStr);

// Pretty print JSON (with indentation):
const prettyJson = JSON.stringify(person4, null, 2); 
// converts person4 object to JSON string, keeps all properties (null), and pretty-prints it with new lines + 2-space indentation

// const jsonStr = JSON.stringify(person4,["name"],5); // only prints name property with 5 spaces indentation

console.log("Pretty printed JSON:", prettyJson);

// ------------ Working with JSON Arrays ------------
const jsonArray = `[
    {"name": "Umer", "age": 23},
    {"name": "Azmi", "age": 25},
    {"name": "Shaikh", "age": 27}
]`;

const users = JSON.parse(jsonArray);
console.log("First user's name from JSON array:", users[0].name);

// Loop through JSON array:
console.log("Looping through JSON array:");
users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});


// ================= TOPIC 37: ERROR HANDLING (try/catch/finally) =================

// Error = An Object that is created to represent a problem that occurs
//         Occurs often with user input or establishing a connection
//         Helps prevent program crashes by handling exceptions gracefully

// Key concepts:
// try { } = Encloses code that might potentially cause an error
//           Code inside try block is executed normally until an error occurs
// catch { } = Catches and handles any thrown Errors from try { }
//             Receives the error object as a parameter
// finally { } = (optional) ALWAYS executes, regardless of error or success
//               Used mostly for cleanup operations
//               ex. close files, close connections, release resources
// throw = Keyword to manually create and throw a custom error
//         Syntax: throw new Error("error message");

// ------------ PROFESSIONAL WAY: HTML Input Version ------------

const dividendInput = document.getElementById("dividendInput");
const divisorInput = document.getElementById("divisorInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDisplay = document.getElementById("resultDisplay");

calculateBtn.onclick = function(){
    try{
        // Get values from HTML inputs and convert to numbers
        const dividend = Number(dividendInput.value);
        const divisor = Number(divisorInput.value);
        
        // throw = manually creates and throws an error
        // Stops execution and jumps to catch block
        if(divisor === 0){
            throw new Error("You can't divide by zero!");
        }
        
        // isNaN() = checks if value is Not a Number
        // Returns true if the value is NaN (like if user enters text)
        if(isNaN(dividend) || isNaN(divisor)){
            throw new Error("Values must be a number");
        }
        
        // If no errors thrown, calculation proceeds
        const result = dividend / divisor;
        console.log("Division result:", result);
        resultDisplay.textContent = `Result: ${result}`;
        resultDisplay.style.color = "green";
    }
    catch(error){
        // error = Error object containing information about what went wrong
        // error.message = the error message string
        console.error("Error caught:", error);
        resultDisplay.textContent = `Error: ${error.message}`;
        resultDisplay.style.color = "red";
    }
    finally{
        // finally block ALWAYS runs, whether error occurred or not
        // Useful for cleanup operations
        console.log("Finally block: This always executes");
    }
}

console.log("Error handling setup complete!");

// ------------ EXAMPLE: Why use try/catch? ------------

// WITHOUT try/catch (program crashes):
/*
function divideWithoutErrorHandling(a, b){
    if(b === 0){
        // This would crash the entire program
        throw new Error("Division by zero!");
    }
    return a / b;
}
// If error occurs, everything after this stops working
*/

// WITH try/catch (program continues):
/*
function divideWithErrorHandling(a, b){
    try{
        if(b === 0){
            throw new Error("Division by zero!");
        }
        return a / b;
    }
    catch(error){
        console.error(error.message);
        return null;  // Return safe value instead of crashing
    }
}
// Program continues even if error occurs
*/

// ------------ Common Error Types ------------

// Error = Base error object
// SyntaxError = Code syntax is incorrect
// ReferenceError = Variable doesn't exist
// TypeError = Wrong type (e.g., calling method on undefined)
// RangeError = Number outside valid range

// Examples:
/*
try{
    // This would throw ReferenceError (variable doesn't exist)
    console.log(nonExistentVariable);
}
catch(error){
    console.log(error.name);  // "ReferenceError"
    console.log(error.message);  // "nonExistentVariable is not defined"
}
*/
