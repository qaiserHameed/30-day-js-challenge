/* 
                                                                                    Day-08
Activity 1: Template Literals
Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

*/

let personName = 'qaiser';
let age = 24;
console.log(`Name: ${personName} age: ${age}`);

const multiLineString = `This is a multi-line string.
It spans multiple lines.
Each new line is preserved.`;
console.log(multiLineString);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.


const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first, second); // 10, 20

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.


const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
const { title, author } = book;
console.log(title, author); // To Kill a Mockingbird, Harper Lee

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arr = [5,6,7,8,9];
let  newArr = [1,2,3,4,...arr,...numbers]
console.log(newArr);


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const result = sum(1, 2, 3, 4, 5); // Example usage
console.log(result); // This will print the sum of the arguments

//Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function two (a,b=1){
    return a*b
}
console.log(two(6,2));
console.log(two(6));

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let pName ='qaiser';
let pAge = 24;
let p = {
    pName,
    pAge,
    greet() {
        console.log(`Hello, my name is ${this.pName} and I am ${this.pAge} years old.`);
    }
}
console.log(p);
p.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console.


const propName = "favoriteColor";
const value = "blue";

const obj = {
    [propName]: value
};

console.log(obj); // { favoriteColor: "blue" }