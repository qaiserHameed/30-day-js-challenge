/*
                                                                        Day 5: Functions

Tasks/Activities:

Activity 1: Function Declaration

Task 1: Write a function to check if a number is even or odd and log the result to the console.
Task 2: Write a function to calculate the square of a number and return the result.
*/

function checkEvenOdd(a){
    if(a%2 == 0){
        console.log(`${a} is even Number`);
    }else{
        console.log(`${a} is Odd Number`);
        
    }
}
checkEvenOdd(4);

function returnSquare(sq){
    return sq = sq * sq
}
console.log(returnSquare(5));

/* 
Activity 2: Function Expression

Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
Task 4: Write a function expression to concatenate two strings and return the result.
*/

function findMaxNum(num1,num2){
    if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}
else{
        console.log(`${num2} is greater than ${num1}`);
    }
}
findMaxNum(25,20)

function concatinateStrings(st1,st2){
return st1 + " " + st2
}
console.log(concatinateStrings("hello","qaiser"));

/* 
Activity 3: Arrow Functions

Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
*/
 sumArrow = (a,b) => {
   return a + b
 } 
console.log( sumArrow(5,6));

const containsCharacter = (str, char) => str.includes(char);

// Example usage:
console.log(containsCharacter('hello', 'e')); // true
console.log(containsCharacter('world', 'a')); // false

/* 
Activity 4: Function Parameters and Default Values

Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
*/

function findMul(a,b=1){
    return a*b
}
console.log(findMul(6));

function greet(g,age){
    console.log(`Hello ${g} welcome to our Website and your age is ${age}`);
}
greet('qaiser',56)