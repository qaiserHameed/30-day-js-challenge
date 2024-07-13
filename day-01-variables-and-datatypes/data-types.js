/* 
Activity 3: Data Types

Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
Activity 4: Reassigning Variables

Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
Activity 5: Understanding const

Task 6: Try reassigning a variable declared with const and observe the error.
*/
let boy = 'qaiser';
let money = 500;
let isLoggedIn = true;
let animals = ['monkey','lion','goat'];
let games = {
    firstName: 'qaiser',
    lastName: 'hameed',
};
console.log(typeof(boy));
console.log(typeof(money));
console.log(money);
console.log(typeof(isLoggedIn));
console.log(typeof(animals));
console.log(typeof(games));

//reassigning a value using let
money=700;
console.log(money);

const apple = 1;
console.log(apple);

//reassigning a value using const
// apple = 2;
// console.log(apple);

/*
Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
*/
console.log('boy:', boy,  '| type:', typeof(boy));
console.log('money:', money,  '| type:', typeof(money));
console.log('isLoggedIn:', isLoggedIn,  '| type:', typeof(isLoggedIn));
console.log('animals:', animals,  '| type:', typeof(animals));
console.log('games:', games,  '| type:', typeof(games));

/*
Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
*/ 
let age =18;
const birthYear = 1999;

console.log(age);
age = 22;
console.log('Age is ', age , ' means age is updated');

console.log('birthyear is ', birthYear);
console.log('const not updated or reasign thats why error is showing');
birthYear = 2000;