/* 

                                                                                    Day 6: Arrays

Tasks/Activities:

Activity 1: Array Creation and Access

Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
Task 2: Access the first and last elements of the array and log them to the console.
*/

let array1 = [1,2,3,4,5];
console.log(array1);
console.log(array1.shift(),' is 1st element');
console.log(array1[array1.length - 1], ' is last element');

/* 
Activity 2: Array Methods (Basic)

Task 3: Use the push method to add a new number to the end of the array and log the updated array.
Task 4: Use the pop method to remove the last element from the array and log the updated array.
Task 5: Use the shift method to remove the first element from the array and log the updated array.
Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
*/
array2 = [1,2,3,4,5];
array2.push(6);
console.log(array2, ' i use push');
array2.pop();
console.log(array2, ' i use pop');
array2.shift(0);
console.log(array2, ' i use shift');
array2.unshift(1);
console.log(array2, ' i use unshift');

/* 
Activity 3: Array Methods (Intermediate)

Task 7: Use the map method to create a new array where each number is doubled and log the new array.
Task 8: Use the filter method to create a new array with only even numbers and log the new array.
Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
*/

    let arr3 = [1,2,3,4,5];
    const doubledNumbers = arr3.map(items => items * 2);
    console.log(doubledNumbers);

    const evenNumbers = arr3.filter(items => items % 2 === 0);
    console.log(evenNumbers);
    
    
    const sumAllNumbers = arr3.reduce((accumulator,currentValue) => {
        return accumulator + currentValue;
    },0)
    console.log(sumAllNumbers);

    /* 
    Activity 4: Array Iteration

Task 10: Use a for loop to iterate over the array and log each element to the console.
Task 11: Use the forEach method to iterate over the array and log each element to the console.

Activity 5: Multi-dimensional Arrays


    */

let arr4 = [1,2,3,4,5];
for(i=0; i< arr4.length;i++){
    console.log(arr4[i]);
}

arr4.forEach(element => {
    console.log(element);
});

/* 
Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
Task 13: Access and log a specific element from the two-dimensional array.
*/

let twoDArray =[
    [1,2,3,4,5],
    [6,7,8,9,10]
];
console.table(twoDArray);

console.log(twoDArray[0][1]);