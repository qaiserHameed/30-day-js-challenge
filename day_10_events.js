/* 
                                                                            Day 10: Event Handling

Tasks/Activities:

Activity 1: Basic Event Handling

Task 1: Add a click event listener to a button that changes the text content of a paragraph.
Task 2: Add a double-click event listener to an image that toggles its visibility.
*/
let para01 = document.querySelector('.para-1') 
const  button1 = document.addEventListener('click',()=> para01.textContent="Text changed")

let image = document.querySelector('.image1')
const  button2 = document.addEventListener('dblclick',()=> image.style.display = "none")

/*
Activity 2: Mouse Events

Task 3: Add a mouseover event listener to an element that changes its background color.
Task 4: Add a mouseout event listener to an element that resets its background color.
*/
let box = document.querySelector('.box');
box.addEventListener('mouseover',()=> box.style.backgroundColor = "yellow") ;
box.addEventListener('mouseout',()=> box.style.backgroundColor = "red") ;

/*
Activity 3: Keyboard Events

Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
*/
let input = document.querySelector('.input1');

input.addEventListener('keydown',()=> console.log('key Pressed')) ;
input.addEventListener('keyup',()=> {
    let a = input.value;
    console.log(a);
}) ;

/*
Activity 4: Form Events

Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
*/

const submit = document.querySelector('.submit');
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
event.preventDefault();
console.log('Form submission prevented');
})

let dropdown = document.getElementById('dp1');
console.log(dropdown);
let dpPara = document.querySelector('.dp');

dropdown.addEventListener('change', function () {
    // let option = document.querySelector('option')
    let selectedValue = dropdown.value; // Use 'let' to declare the variable
    dpPara.textContent = `Selected Value: ${selectedValue}`; // Display the selected value in the paragraph
    console.log(selectedValue); // Log the selected value to the console
});

/* 
Activity 5: Event Delegation

Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
*/