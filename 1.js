// =============================== TOPIC 1: OUTPUT & COMMENTS ===============================

// console.log() = prints output to the browser's console (F12 to open)
// Used for debugging and testing
console.log("Hello");
console.log("I like pizza!");

// window.alert() = displays a popup alert box to the user
// Can be annoying, use sparingly
window.alert("This is an alert!");
// window.alert("I like pizza!");

// document.getElementById() = finds an HTML element by its ID
// .textContent = changes the text inside that element
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza!";

// This is a single-line comment
// Use comments to explain your code

/*
    This is a
    multi-line comment
    Use for longer explanations
*/


// =============================== TOPIC 2: VARIABLES ===============================

// variable = A container that stores a value
// Behaves as if it were the value it contains

// let = keyword to create a variable that can be changed later
let fullName = "Umer Azmi";  // String (text) - use quotes
let age = 23;                // Number - no quotes needed
let isStudent = false;       // Boolean - true or false only

// ${} = template literal syntax - inserts variable values into strings
// Must use backticks ` ` not regular quotes
document.getElementById("var-p1").textContent = `Your name is ${fullName}`;
document.getElementById("var-p2").textContent = `You are ${age} years old`;
document.getElementById("var-p3").textContent = `Enrolled: ${isStudent}`;


// =============================== TOPIC 3: ARITHMETIC OPERATORS ===============================

// arithmetic operators = symbols that perform math operations
// operands = values, variables, etc.
// operators = + - * / ** %

let students = 30;

// Basic operations (these are commented out so only one runs at a time)
// students = students + 1;   // Addition
// students = students - 1;   // Subtraction
// students = students * 2;   // Multiplication
// students = students / 2;   // Division
// students = students ** 2;  // Exponent (power) - 30^2 = 900
// let extraStudents = students % 3;  // Modulo (remainder) - 30 % 3 = 0

// Shorthand operators = shorter way to write operations
// students += 1;   // Same as: students = students + 1
// students -= 1;   // Same as: students = students - 1
// students *= 2;   // Same as: students = students * 2
// students /= 2;   // Same as: students = students / 2
// students **= 2;  // Same as: students = students ** 2
// students %= 2;   // Same as: students = students % 2

// Increment/Decrement operators = add or subtract 1
// students++;  // Same as: students = students + 1 or students += 1
// students--;  // Same as: students = students - 1 or students -= 1

/*
operator precedence = order that operations are performed
1. parenthesis ()
2. exponents **
3. multiplication * & division / & modulo %
4. addition + & subtraction -
*/

let result = 6 / 2 * (1 + 2);  // Answer: 9 (not 1!)
// Step 1: (1 + 2) = 3
// Step 2: 6 / 2 = 3
// Step 3: 3 * 3 = 9
console.log(result);


// =============================== TOPIC 4: USER INPUT ===============================

// How to accept user input
// 1. EASY WAY = window.prompt (popup box)
// 2. PROFESSIONAL WAY = HTML textbox

// ------------------------- EASY WAY -------------------------
// window.prompt() = shows popup asking for input
// Returns whatever user types as a string
// let username = window.prompt("What's your username?");
// console.log(username);

// --------------------- PROFESSIONAL WAY ---------------------
let username;

// .onclick = runs a function when element is clicked
// function(){} = anonymous function (function with no name)
document.getElementById("mySubmit").onclick = function(){
    // .value = gets the current value from an input field
    username = document.getElementById("myText").value;
    document.getElementById("myH1-topic4").textContent = `Hello ${username}`;
}


// =============================== TOPIC 5: TYPE CONVERSION ===============================

// type conversion = change the datatype of a value to another
// (strings, numbers, booleans)

// --------------- EXAMPLE 1 ---------------
// window.prompt always returns a STRING
let userAge = window.prompt("How old are you?");

// Number() = converts value to a number
userAge = Number(userAge);
userAge += 1;  // Now we can do math with it

// typeof = tells you the datatype of a variable
console.log(userAge, typeof userAge);

console.log("---- EXAMPLE 2 -");
// --------------- EXAMPLE 2 ---------------
let x = "pizza";
let y = "pizza";
let z = "pizza";

// Number() = converts to number (if can't convert, becomes NaN)
x = Number(x);  // "pizza" becomes NaN (Not a Number)

// String() = converts to string (text)
y = String(y);  // already a string, no change

// Boolean() = converts to boolean (true/false)
// Empty strings = false, anything else = true
z = Boolean(z);  // "pizza" becomes true

console.log(x, typeof x);  // NaN "number"
console.log(y, typeof y);  // pizza "string"
console.log(z, typeof z);  // true "boolean"


// =============================== TOPIC 6: CONSTANTS ===============================

// const = a variable that CAN'T be changed after being set
// Use UPPERCASE for constant names (convention)
const PI = 3.14159;
let radius;
let circumference;

// This would cause an ERROR:
// PI = 420.69;  // Cannot reassign a const variable!

document.getElementById("mySubmit2").onclick = function(){
    radius = document.getElementById("myText2").value;
    radius = Number(radius);  // Convert string to number
    circumference = 2 * PI * radius;
    // + = concatenation (joining strings together)
    document.getElementById("myH3").textContent = circumference + "cm";
}


// =============================== TOPIC 7: MATH OBJECT ===============================

// Math = built-in object that provides a collection of
//        properties (values) and methods (functions) for math

let a = 3.6;
let b = 2;
let c = 1;
let mathResult;

// Properties (constants)
// console.log(Math.PI);   // 3.14159...
// console.log(Math.E);    // 2.718... (Euler's number)

// Rounding methods
// Math.round() = rounds to nearest integer
// mathResult = Math.round(a);  // 3.6 becomes 4

// Math.floor() = rounds DOWN to nearest integer
// mathResult = Math.floor(a);  // 3.9 becomes 3

// Math.ceil() = rounds UP to nearest integer (ceiling)
// mathResult = Math.ceil(a);   // 3.1 becomes 4

// Math.trunc() = removes decimal part (truncate)
// mathResult = Math.trunc(a);  // 3.6 becomes 3

// Math operations
// Math.pow(base, exponent) = calculates power
// mathResult = Math.pow(a, b);  // 3.6^2 = 12.96

// Math.sqrt() = calculates square root
// mathResult = Math.sqrt(a);  // √3.6 = 1.897...

// Math.log() = natural logarithm
// mathResult = Math.log(a);

// Trigonometric functions (use radians, not degrees)
// mathResult = Math.sin(a);
// mathResult = Math.cos(a);
// mathResult = Math.tan(a);

// Math.abs() = absolute value (removes negative sign)
// mathResult = Math.abs(a);  // |-5| = 5

// Math.sign() = returns -1, 0, or 1 based on sign
// mathResult = Math.sign(a);  // positive = 1, negative = -1, zero = 0


// Math.random() = generates a random decimal number between 0 and 1
// Returns a number like 0.123456 (never exactly 0 or 1)
// mathResult = Math.random();

// Generate random number between 0 and 5 (decimal)
// mathResult = Math.random() * 6;  // 0 to 5.999...

// Generate random INTEGER between 0 and 5
// mathResult = Math.floor(Math.random() * 6);  // 0, 1, 2, 3, 4, or 5

// Generate random INTEGER between 1 and 6 (like a dice roll)
// mathResult = Math.floor(Math.random() * 6) + 1;  // 1, 2, 3, 4, 5, or 6

// Generate random number in a specific range [min, max]
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// Example: Random number between 50 and 100
// let min = 50;
// let max = 100;
// mathResult = Math.floor(Math.random() * (max - min + 1)) + min; 

// Math.max() = returns the largest number
let max = Math.max(a, b, c);  // Returns 3.6

// Math.min() = returns the smallest number
let min = Math.min(a, b, c);  // Returns 1

console.log("Max:", max);
console.log("Min:", min);