// ================= TOPIC 43: DOM ELEMENT CREATION =================

// DOM = Document Object Model
// Allows JavaScript to interact with and manipulate HTML elements
// document.createElement() = Creates a new HTML element

// ---------- EXAMPLE 1: h1 ELEMENT ----------

// STEP 1: CREATE THE ELEMENT
// createElement(tagName) = Creates a new element of specified type
const newH1 = document.createElement("h1");

// STEP 2: ADD ATTRIBUTES/PROPERTIES
// .textContent = Sets the text inside the element
newH1.textContent = "I like pizza!";
// .id = Sets the id attribute
newH1.id = "myH1";
// .style = Access inline CSS styles
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3: APPEND ELEMENT TO DOM
// .append() = Adds element to the END of parent
document.body.append(newH1);

// Other positioning methods:
// .prepend() = Adds element to the BEGINNING of parent
// document.body.prepend(newH1);

// Append to specific element by ID:
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// .insertBefore(newElement, referenceElement) = Insert before a specific element
// const box4 = document.getElementById("box4");
// document.body.insertBefore(newH1, box4);

// Insert before first element in a collection:
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

// REMOVE HTML ELEMENT
// .removeChild(element) = Removes a child element from parent
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// ---------- EXAMPLE 2: li ELEMENT ----------

// STEP 1: CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2: ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3: APPEND ELEMENT TO DOM
document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// Insert before specific list item:
// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// Insert before second item in list:
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newListItem);
// document.getElementById("fruits").removeChild(newListItem);


// ================= TOPIC 44: EVENT LISTENERS - MOUSE EVENTS =================

// eventListener = Listen for specific events to create interactive web pages
//                 Events: click, mouseover, mouseout
//                 Syntax: element.addEventListener(event, callback)

// event = Type of event to listen for (click, mouseover, etc.)
// callback = Function to execute when event occurs
// event.target = The element that triggered the event

const myBox = document.getElementById("myBox");

// click = Fires when element is clicked
myBox.addEventListener("click", event => {
    // event.target = the element that was clicked
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
});

// mouseover = Fires when mouse pointer enters element
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😲";
});

// mouseout = Fires when mouse pointer leaves element
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😀";
});


// ================= TOPIC 45: EVENT LISTENERS - KEYBOARD EVENTS =================

// eventListener = Listen for specific events to create interactive web pages
//                 Events: keydown, keyup
//                 document.addEventListener(event, callback)

// keydown = Fires when key is pressed down
// keyup = Fires when key is released
// event.key = The key that was pressed (e.g., "ArrowUp", "a", "Enter")
// event.preventDefault() = Prevents default browser behavior

const myBox2 = document.getElementById("myBox");
const moveAmount = 10;  // Pixels to move per keypress
let x = 0;  // Horizontal position
let y = 0;  // Vertical position

// Change appearance when key is pressed
document.addEventListener("keydown", event => {
    myBox2.textContent = "😲";
    myBox2.style.backgroundColor = "tomato";
});

// Change appearance when key is released
document.addEventListener("keyup", event => {
    myBox2.textContent = "😀";
    myBox2.style.backgroundColor = "lightblue";
});

// Move box with arrow keys
document.addEventListener("keydown", event => {

    // .startsWith() = Checks if string starts with specified characters
    if(event.key.startsWith("Arrow")){

        // Prevent default arrow key behavior (scrolling page)
        event.preventDefault();

        // Update position based on which arrow key was pressed
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;  // Move up (decrease y)
                break;
            case "ArrowDown":
                y += moveAmount;  // Move down (increase y)
                break;
            case "ArrowLeft":
                x -= moveAmount;  // Move left (decrease x)
                break;
            case "ArrowRight":
                x += moveAmount;  // Move right (increase x)
                break;
        }

        // Apply new position to element
        // Template literal with px units
        myBox2.style.top = `${y}px`;
        myBox2.style.left = `${x}px`;
    }
});


// ================= TOPIC 46: SHOW/HIDE ELEMENTS =================

// Two ways to hide elements:
// 1. display: none = Removes element from layout (takes no space)
// 2. visibility: hidden = Hides element but keeps its space

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
   
    // ----- METHOD 1: DISPLAY (Removes from layout) -----
    // display: none = Element is hidden and takes no space
    // display: block = Element is visible and takes normal space
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
   
    // ----- METHOD 2: VISIBILITY (Keeps space) -----
    // visibility: hidden = Element is hidden but space remains
    // visibility: visible = Element is visible
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
});

// Difference:
// display: none → Image disappears, elements below move up
// visibility: hidden → Image disappears, but empty space remains


// ================= TOPIC 47: IMAGE SLIDER =================

// IMAGE SLIDER - Automatically cycles through images with navigation buttons

// querySelectorAll() = Returns ALL elements matching selector as NodeList
// Returns static list (doesn't update if DOM changes)
const slides = document.querySelectorAll(".slides img");

// Variables to track slider state
let slideIndex = 0;  // Current slide being shown (0-based index)
let intervalId = null;  // Stores timer ID for auto-sliding

// DOMContentLoaded = Event fires when HTML is fully loaded and parsed
// Ensures DOM is ready before running JavaScript
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    // Check if slides exist before initializing
    if(slides.length > 0){
        // .classList.add() = Adds a CSS class to element
        // Makes first slide visible
        slides[slideIndex].classList.add("displaySlide");
        
        // setInterval(function, milliseconds) = Repeatedly calls function at interval
        // Auto-advances to next slide every 5 seconds (5000ms)
        // Returns interval ID that can be used to stop it
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    // Handle wrap-around at end of slides
    if(index >= slides.length){
        slideIndex = 0;  // Go back to first slide
    }
    // Handle wrap-around at beginning of slides
    else if(index < 0){
        slideIndex = slides.length - 1;  // Go to last slide
    }

    // .forEach() = Executes function for each element in NodeList
    // Remove display class from all slides (hide all)
    slides.forEach(slide => {
        // .classList.remove() = Removes a CSS class from element
        slide.classList.remove("displaySlide");
    });
    
    // Add display class to current slide (show only this one)
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    // clearInterval(intervalId) = Stops the repeating timer
    // Stops auto-sliding when user manually navigates
    clearInterval(intervalId);
    
    slideIndex--;  // Go to previous slide
    showSlide(slideIndex);  // Display it
}

function nextSlide(){
    slideIndex++;  // Go to next slide
    showSlide(slideIndex);  // Display it
}

// Key Methods/Properties Explained:
// - querySelectorAll() = Gets all matching elements
// - DOMContentLoaded = Event when HTML is ready
// - classList.add() = Adds CSS class to element
// - classList.remove() = Removes CSS class from element
// - setInterval() = Repeats function at interval
// - clearInterval() = Stops setInterval timer
// - forEach() = Loops through each element
// - slides.length = Number of slides in collection


// ================= TOPIC 48: QUERYSELECTOR & QUERYSELECTORALL =================

// querySelector() vs querySelectorAll()
// Both use CSS selectors to find elements (like in CSS: .class, #id, tag)

// -------- querySelector() --------
// Returns: FIRST element that matches the selector (single element)
// Returns null if no match found
// Syntax: document.querySelector(selector)

// Examples:
const firstBox = document.querySelector(".box");  // First element with class "box"
const header = document.querySelector("#header");  // Element with id "header"
const firstPara = document.querySelector("p");  // First <p> element
const firstLink = document.querySelector("a[href]");  // First <a> with href attribute

// -------- querySelectorAll() --------
// Returns: ALL elements that match the selector (NodeList - array-like)
// Returns empty NodeList if no matches
// Syntax: document.querySelectorAll(selector)

// Examples:
const allBoxes = document.querySelectorAll(".box");  // All elements with class "box"
const allParas = document.querySelectorAll("p");  // All <p> elements
const allButtons = document.querySelectorAll("button");  // All <button> elements

// Working with querySelectorAll results:
// Can use .forEach(), .length, array indexing [0], [1], etc.
allBoxes.forEach(box => {
    box.style.backgroundColor = "lightblue";  // Apply to each element
});

console.log("Number of boxes:", allBoxes.length);  // Count of elements
console.log("First box:", allBoxes[0]);  // Access by index

// Key Differences:
// querySelector() = ONE element (first match)
// querySelectorAll() = ALL elements (NodeList)

// When to use which:
// querySelector() → When you only need one element (usually with ID)
// querySelectorAll() → When you need all matching elements (classes, tags)


// ================= TOPIC 49: QUICK REFERENCE - USEFUL METHODS =================

// Short, simple explanations for commonly used methods/properties:

// .toFixed(n) = Rounds number to n decimal places and returns as string
const price = 19.567;
console.log("Price:", price.toFixed(2));  // "19.57"

// location.reload() = Reloads the current page (like pressing F5)
// location.reload();  // Refreshes the page

// isNaN() = Checks if value is "Not a Number", returns true/false
console.log("Is 'abc' a number?", isNaN("abc"));  // true
console.log("Is 123 a number?", isNaN(123));  // false

// .scrollWidth = Total width of content including hidden overflow
const display = document.getElementById("display");
console.log("Total content width:", display.scrollWidth);

// .clientWidth = Visible width of element (excludes scrollbar, border)
console.log("Visible width:", display.clientWidth);

// .innerHTML = Gets or sets HTML content inside element (including tags)
const container = document.getElementById("container");
container.innerHTML = "<h2>New Content</h2>";  // Sets HTML
console.log("Container HTML:", container.innerHTML);  // Gets HTML

// window.getComputedStyle(element) = Gets actual computed CSS styles
// .fontSize = Gets the computed font size property
const fontSize = window.getComputedStyle(display).fontSize;
console.log("Font size:", fontSize);  // e.g., "16px"
