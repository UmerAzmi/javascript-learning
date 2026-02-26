// ================= TOPIC 8: IF STATEMENTS =================

// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

// Comparison operators used in conditions:
// == (equal to), === (strictly equal), != (not equal)
// > (greater than), < (less than), >= (greater or equal), <= (less or equal)

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

// .onclick = event that runs when element is clicked
mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age);  // Convert string input to number
    
    // if = checks first condition
    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    // else if = checks additional conditions if previous ones are false
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born.`
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    // else = executes if ALL above conditions are false
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}


// ================= TOPIC 9: CHECKED PROPERTY =================

// .checked = property that determines the checked state of an 
//            HTML checkbox or radio button element
// Returns true if checked, false if not checked

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit2 = document.getElementById("mySubmit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit2.onclick = function(){
    
    // Check if checkbox is checked
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }
    
    // Check which radio button is selected
    // Radio buttons in same group = only one can be selected at a time
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}


// ================= TOPIC 10: TERNARY OPERATOR =================

// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    syntax: condition ? codeIfTrue : codeIfFalse;

// Example 1: Greeting based on time
let time = 9;
// If time < 12, greeting = "Good morning!", else greeting = "Good afternoon!"
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

// Example 2: Student status
let isStudent = false;
// ? = if true, : = if false
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);

// Example 3: Discount calculation
let purchaseAmount = 99;
// If purchaseAmount >= 100, discount = 10, else discount = 0
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


// ================= TOPIC 11: SWITCH STATEMENTS =================

// switch = more efficient than many else if statements
//          compares a value against many possible cases

// Example 1: Days of the week
const day = 7; 

switch (day) {
    case 1:  // if day === 1
        console.log("It is Monday");
        break;  // break = exit the switch, prevents fall-through
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:  // default = runs if no cases match (like else)
        console.log(`${day} is not a day`);
}

// Example 2: Letter grade based on test score
// switch(true) = allows us to use conditions in cases
let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);


// ================= TOPIC 12: STRING METHODS =================

// string methods = allow you to manipulate and work with text (strings)

let userName = "Umer Azmi";
let phoneNumber = "123-456-7890";

// .length = property that returns the number of characters
// console.log(userName.length);  // 9

// .charAt(index) = returns character at specified index (0-based)
// console.log(userName.charAt(0));  // "U"

// .indexOf(char) = returns first index where character is found
// console.log(userName.indexOf("m"));  // 1

// .lastIndexOf(char) = returns last index where character is found
// console.log(userName.lastIndexOf("m"));  // 7

// .trim() = removes whitespace from both ends of string
// userName = userName.trim();

// .toUpperCase() = converts all characters to uppercase
// userName = userName.toUpperCase();  // "UMER AZMI"

// .toLowerCase() = converts all characters to lowercase
// userName = userName.toLowerCase();  // "umer azmi"

// .repeat(count) = repeats the string a specified number of times
// userName = userName.repeat(3);  // "Umer AzmiUmer AzmiUmer Azmi"
// userName = (userName+" ").repeat(3);  // "Umer Azmi Umer Azmi Umer Azmi "

// .startsWith(string) = checks if string starts with specified characters
// let result = userName.startsWith(" ");  // false

// .endsWith(string) = checks if string ends with specified characters
// let result = userName.endsWith(" ");  // false

// .includes(string) = checks if string contains specified characters
// let result = userName.includes(" ");  // true

// .replace(old, new) = replaces first occurrences of a substring
// phoneNumber = phoneNumber.replace("-", "");  // "123456-7890"

// .replaceAll(old, new) = replaces all occurrences of a substring
// phoneNumber = phoneNumber.replaceAll("-", "");  // "1234567890"

// .padStart(length, string) = pads string at start until it reaches length
// phoneNumber = phoneNumber.padStart(15, "0");  // "000123-456-7890"

// .padEnd(length, string) = pads string at end until it reaches length
// phoneNumber = phoneNumber.padEnd(15, "0");  // "123-456-7890000"

console.log(phoneNumber);


// ================= TOPIC 13: STRING SLICING =================

// string slicing = creating a substring from a portion of another string
//                  string.slice(start, end)
//                  start = index to begin (inclusive)
//                  end = index to stop (exclusive, not included)

// ------------ EXAMPLE 1 ------------
const fullName = "Umer Azmi";

// .slice(0, 4) = gets characters from index 0 to 3 (4 is excluded)
let firstName = fullName.slice(0, 4);  // "Umer"
// .slice(5, 9) = gets characters from index 5 to 8
let lastName = fullName.slice(5, 9);   // "Azmi"

console.log(firstName);
console.log(lastName);

// ------------ EXAMPLE 2 ------------

const email = "UmerAzmi@gmail.com";

// .indexOf("@") = finds position of @ symbol
// .slice(0, position) = gets everything before @
let username = email.slice(0, email.indexOf("@"));  // "UmerAzmi"

// .indexOf("@") + 1 = starts right after @ symbol
let extension = email.slice(email.indexOf("@") + 1);  // "gmail.com"

console.log(username);
console.log(extension);


// ================= TOPIC 14: METHOD CHAINING =================

// Method Chaining = Calling one method after another
//                   in one continuous line of code
//                   Makes code shorter but can be harder to read

// HTML input version (better than window.prompt)
const chainBtn = document.getElementById("chainBtn");
const chainInput = document.getElementById("chainInput");
const chainResult = document.getElementById("chainResult");

chainBtn.onclick = function(){
    let userInput = chainInput.value;
    
    if(userInput === ""){
        chainResult.textContent = "Please enter a username";
        return;
    }
    
    // ----- NO METHOD CHAINING -----
    /*
    userInput = userInput.trim();              // Remove whitespace
    let letter = userInput.charAt(0);          // Get first character
    letter = letter.toUpperCase();             // Make it uppercase

    let extraChars = userInput.slice(1);       // Get rest of string
    extraChars = extraChars.toLowerCase();     // Make it lowercase
    userInput = letter + extraChars;           // Combine them

    console.log(userInput);
    */

    // ----- METHOD CHAINING -----
    // Each method's output becomes input for next method
    // This capitalizes first letter and lowercases the rest
    let formatted = userInput.trim().charAt(0).toUpperCase() + userInput.trim().slice(1).toLowerCase();
    
    chainResult.textContent = `Formatted: ${formatted}`;
    console.log(formatted);
}
