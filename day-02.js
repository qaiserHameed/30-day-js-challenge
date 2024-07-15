/* 
Day 2: Operators

Tasks/Activities:

Activity 1: Arithmetic Operations

Task 1: Write a program to add two numbers and log the result to the console.
Task 2: Write a program to subtract two numbers and log the result to the console.
Task 3: Write a program to multiply two numbers and log the result to the console.
Task 4: Write a program to divide two numbers and log the result to the console.
Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
*/

// Task 1 to 5
let a = 5;
let b = 10;

let sum = a+b;
console.log('sum is ',sum);


let sub = a-b;
console.log('sub is ',sub);


let mul = a*b;
console.log('mul is ',mul);


let div = a/b;
console.log('div is ',div);


let rem = a%b;
console.log('reminder is ',rem);

// Task 6 to 7
/* 
Activity 2: Assignment Operators

Task 6: Use the += operator to add a number to a variable and log the result to the console.
Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

*/
let c = 10;
let d = 20;

c += d;
console.log('c is ',c);
c -= d;
console.log('c is ',c);

/* 
Activity 3: Comparison Operators
Task 8: Write a program to compare two numbers using > and < and log the result to the console.
Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/
let cOperator = c > d;
console.log('c is greater than d:',cOperator);
let co = c < d;
console.log('c is less than d:', co);


let e = 3
let f = 5

let ff = e >= f;
console.log(ff);

let fg = e <= f;
console.log(fg);

let gg = e == f;
console.log(gg);

let gh = e === f;
console.log(gh);

/* 
Activity 4: Logical Operators

Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.



*/
let  h=1;
let  g=2;

if(h==1 && g==2){
console.log('true');
}
if(h==1 || g==2){
console.log('true');
}

if(h!=1 || g!=2){
console.log('true');
}else{
    console.log('false');
}


/* 
Activity 5: Ternary Operator
Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
*/

let num = 2;
let number = num>0 ? 'positive number' : 'negative number';
console.log(number);


/*
Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
*/ 

let num1 = 5;
let num2 = 10;

let addition = num1 + num2;
console.log(`${num1} + ${num2} = ${addition}`);

// Subtraction
let subtraction = num1 - num2;
console.log(`${num1} - ${num2} = ${subtraction}`);

// Multiplication
let multiplication = num1 * num2;
console.log(`${num1} * ${num2} = ${multiplication}`);

// Division
let division = num1 / num2;
console.log(`${num1} / ${num2} = ${division}`);

// Remainder
let remainder = num1 % num2;
console.log(`${num1} % ${num2} = ${remainder}`);

/*
Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
*/
console.log('num1 is ', num1);
console.log('num2 is ', num2);

if(num1 > num2 || num1 == num2){
    console.log(num1,' is greater than ', num2);
}else{
    console.log(num2,' is greater than ', num1);
}
