/* 

                                                                                Day 9: DOM Manipulation
Activity 1: Selecting and Manipulating Elements
Task 1: Select an HTML element by its ID and change its text content.
Select an HTML element using getElementById.
Change its textContent to a new value.
*/
const changeText = document.getElementById('1stpara');
changeText.textContent="hello";

/* 
Activity 2: Creating and Appending Elements
Task 3: Create a new div element with some text content and append it to the body.
Create a new div element using document.createElement.
Set its textContent.
Append it to the body using appendChild.
*/
let newElement = document.createElement('div');
newElement.textContent="New div"
document.body.appendChild(newElement);



// Task 4: Create a new li element and add it to an existing ul list.
// Create a new li element using document.createElement.
// Set its textContent.
// Append it to an existing ul element using appendChild.
// let newList = document .getElementsByClassName('list');
// let newLi = document.createElement(li);
// newLi.textContent="New List"
// newList.appendChild(newLi)

// Get the existing ul element
let ulElement = document.getElementsByClassName('list')[0]; // Assuming there's only one ul with this class

// Create a new li element
let newLi = document.createElement('li');

// Set the text content of the new li element
newLi.textContent = "New List";

// Append the new li element to the existing ul element
ulElement.appendChild(newLi);


// Task 5: Select an HTML element and remove it from the DOM
// Select an HTML element.
// Use removeChild on its parent element to remove it from the DOM.

    let parent = document.querySelector('.parent');
    let child = document.querySelector('.child');
    parent.removeChild(child);


//     Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)

// Select an HTML element.
// Use setAttribute to change one of its attributes.

    let img = document.querySelector('.img1')
    img.setAttribute('src',"./img")



//     Task 8: Add and remove a CSS class to/from an HTML element
// Select an HTML element.
// Use classList.add to add a CSS class.
// Use classList.remove to remove a CSS class.

// let box = document.querySelector('.box');
// box.classList.remove('box');



let box = document.querySelector('.box');
box.classList.add('box');


// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph

// Select a button element.
// Use addEventListener to add a click event.
// Change the textContent of a paragraph element within the event listener.

let button = document.querySelector('.b1');

function buttonText(){
button.innerText = "text changed";
}
button.addEventListener('click',buttonText)


// Task 10: Add a mouseover event listener to an element that changes its border color

// Select an element.
// Use addEventListener to add a mouseover event.
// Change the borderColor property of the element's style object within the event listener.

function borderColor(){
    box.style.border='10px solid black';
}

box.addEventListener('mouseover',borderColor)