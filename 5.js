// ================= TOPIC 25: forEach() METHOD =================

console.log("\n--- Topic 25: forEach() Method ---");

// forEach() = method used to iterate over the elements 
//             of an array and apply a specified function (callback)
//             to each element

// Syntax: array.forEach(callback)
// The callback receives: element, index, array

// -------------- EXAMPLE 1: Math operations --------------

const numbers = [1, 2, 3, 4, 5];

// Apply cube function to each element, then display
numbers.forEach(cube);
numbers.forEach(display);

// Each function receives: element, index, array
function double(element, index, array){
    array[index] = element * 2;  // Modifies original array
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);  // element squared
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);  // element cubed
}

function display(element){
    console.log(element);  // Just prints the element
}

// -------------- EXAMPLE 2: String manipulation --------------

let fruits = ["apple", "orange", "banana", "coconut"];


function upperCase(element, index, array){
    array[index] = element.toUpperCase();  // "APPLE"
}

function lowercase(element, index, array){
    array[index] = element.toLowerCase();  // "apple"
}

function capitalize(element, index, array){
    // First letter uppercase + rest of string
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

// Capitalize first letter of each fruit, then display
fruits.forEach(capitalize);
fruits.forEach(display);

// Note: forEach() modifies the original array
// It doesn't return a new array


// ================= TOPIC 26: map() METHOD =================

console.log("\n--- Topic 26: map() Method ---");

// .map() = accepts a callback and applies that function 
//          to each element of an array, then returns a NEW array
// Original array stays unchanged

// ------------ EXAMPLE 1: Number transformations ------------
const numbers2 = [1, 2, 3, 4, 5];

function square2(element){
    return Math.pow(element, 2);  // Returns new value
}

function cube2(element){
    return Math.pow(element, 3);
}

// Creates NEW arrays with transformed values
const squared = numbers2.map(square2);  // [1, 4, 9, 16, 25]
const cubed = numbers2.map(cube2);      // [1, 8, 27, 64, 125]

console.log(cubed);


// ------------ EXAMPLE 2: String transformations ------------
const students = ["Umer", "Azmi", "Ahmed", "Khan"];


function upperCase2(element){
    return element.toUpperCase();
}

function lowerCase2(element){
    return element.toLowerCase();
}

// Creates new arrays without modifying original
const studentsUpper = students.map(upperCase2);  // ["UMER", "AZMI", ...]
const studentsLower = students.map(lowerCase2);  // ["umer", "azmi", ...]

console.log(studentsLower);

// ------------ EXAMPLE 3: Date formatting ------------
const dates = ["2024-1-10", "2002-6-03", "2026-3-30"];

function formatDates(element){
    const parts = element.split("-");  // Split by "-"
    // Rearrange: month/day/year
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);

console.log(formattedDates);  // ["10/1/2024", "03/6/2025", "30/3/2026"]

// Key difference: forEach modifies original, map returns new array


// ================= TOPIC 27: filter() METHOD =================

console.log("\n--- Topic 27: filter() Method ---");

// filter() = creates a NEW array by filtering out elements
//            Returns only elements where callback returns true
// Original array stays unchanged

// ----------- EXAMPLE 1: Filter even/odd numbers -----------
let numbers3 = [1, 2, 3, 4, 5, 6, 7];

function isEven(element){
    return element % 2 === 0;  // Returns true if even
}

function isOdd(element){
    return element % 2 !== 0;  // Returns true if odd
}

// Creates new arrays with filtered values
let evenNums = numbers3.filter(isEven);  // [2, 4, 6]
let oddNums = numbers3.filter(isOdd);    // [1, 3, 5, 7]

console.log(oddNums);


// ----------- EXAMPLE 2: Filter by age -----------
let ages = [16, 17, 17, 18, 19, 20, 65];

function isAdult(element){
    return element >= 18;  // Returns true if 18 or older
}

function isChild(element){
    return element < 18;   // Returns true if under 18
}

// Separate adults and children
let adults = ages.filter(isAdult);    // [18, 19, 20, 65]
let children = ages.filter(isChild);  // [16, 17, 17]

console.log(children);

// ----------- EXAMPLE 3: Filter by string length -----------
const words = ['apple', 'orange', 'kiwi', 'banana', 'pomegranate', 'coconut'];

function getShortWords(element){
    return element.length <= 6;  // Returns true if 6 chars or less
}

function getLongWords(element){
    return element.length > 6;   // Returns true if more than 6 chars
}

// Filter words by length
const longWords = words.filter(getLongWords);   // ["pomegranate"]
const shortWords = words.filter(getShortWords); // ["apple", "orange", "kiwi", "banana"]

console.log(shortWords);

// ================= TOPIC 28: reduce() METHOD =================

console.log("\n--- Topic 28: reduce() Method ---");

// .reduce() = reduce the elements of an array to a SINGLE value
// Processes array left to right
// accumulator = running total, element = current value

// ----------- EXAMPLE 1: Sum of prices -----------
const prices = [5, 30, 10, 25, 15, 20];

// accumulator starts at first element (5)
// Then adds each element: 5 + 30 + 10 + 25 + 15 + 20 = 105
function sum(accumulator, element){
    return accumulator + element;
}

// Reduces array to single sum value
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);  // $105.00

// ----------- EXAMPLE 2: Find max/min values -----------
const scores = [75, 50, 90, 80, 65, 95];

function getMax(accumulator, element){
    // Returns whichever is larger
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    // Returns whichever is smaller
    return Math.min(accumulator, element);
}

const maximum = scores.reduce(getMax);  // 95
const minimum = scores.reduce(getMin);  // 50

console.log(`Max: ${maximum}, Min: ${minimum}`);


// How reduce works:
// accumulator = running value (starts as first element)
// element = current element being processed
// Returns final accumulated value


// ================= TOPIC 29: FUNCTION EXPRESSIONS =================

console.log("\n--- Topic 29: Function Expressions ---");

// function expressions = a way to define functions as values or variables
// Functions can be stored in variables and passed around

// Traditional function declaration:
// function myFunction() { }

// Function expression (anonymous function stored in variable):
const numbers4 = [1, 2, 3, 4, 5, 6];

// Using function expression with map
const squares2 = numbers4.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares2);

// Function expression with setTimeout
// Executes after 3000ms (3 seconds)
setTimeout(function(){
    console.log("function expression: Hello");
}, 3000);

// Benefits of function expressions:
// - Can be anonymous (no name needed)
// - Can be passed as arguments
// - Can be assigned to variables
// - Useful for one-time use functions


// ================= TOPIC 30: ARROW FUNCTIONS =================

console.log("\n--- Topic 30: Arrow Functions ---");

// arrow functions = a concise way to write function expressions
//                   Good for simple functions that you use only once
//                   Syntax: (parameters) => some code

// ---------- EXAMPLE 1: Basic arrow function ----------
// Traditional function vs arrow function
const hello = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};

hello("Umer Azmi", 23);

// Single line arrow function (no brackets needed):
// const greet = (name) => console.log(`Hi ${name}`);

// ---------- EXAMPLE 2: Arrow function with setTimeout ----------
setTimeout(() => {
    console.log(`Arrow Function:`);
    console.log("Hello"); 
    console.log("Goodbye");
}, 3000);

// ---------- EXAMPLE 3: Arrow functions with array methods ----------
const numbers5 = [1, 2, 3, 4, 5, 6];

// Concise syntax - no function keyword needed
const squares3 = numbers5.map((element) => Math.pow(element, 2));
const cubes3 = numbers5.map((element) => Math.pow(element, 3));
const evenNums2 = numbers5.filter((element) => element % 2 === 0);
const oddNums2 = numbers5.filter((element) => element % 2 !== 0);
const total2 = numbers5.reduce((accumulator, element) => accumulator + element);

console.log(total2);  // 21

// Arrow function syntax variations:
// No parameters: () => code
// One parameter: element => code (parentheses optional)
// Multiple parameters: (a, b) => code
// One line: (x) => x * 2 (implicit return, no brackets)
// Multiple lines: (x) => { return x * 2; } (explicit return, brackets needed)

// Benefits of arrow functions:
// - Shorter syntax
// - Cleaner code
// - Perfect for callbacks
// - Implicit return for single expressions
