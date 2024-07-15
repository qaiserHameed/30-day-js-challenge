
                                                                        //   Day 3: Control Structures
 
/*
Activity 1: If-Else Statements

Task 1: Number Check Script
Write a program to check if a number is positive, negative, or zero, and log the result to the console.
*/
let num = 2;
if(num >= 0){
    console.log(num, ' is positive');
}else{
    console.log(num, ' is negative');

}

/* 
Task 2: Voting Eligibility Script

Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
*/
let age = 22;
if(age >= 18){
    console.log('eligible for vote');
}else{
    console.log('not-eligible for vote');

}

/* 
Task 3: Largest Number Script
Write a program to find the largest of three numbers using nested if-else statements.
*/
let a = 10;
let b = 4;
let c = 3;

if(a > b && a>c){
    console.log(a, ' is greater');
}else if(b > a && b>c){
    console.log(b, ' is greater');
    
}else{
    console.log(c, ' is greater');

}

/* 
Activity 3: Switch Case
Task 4: Day of the Week Script

Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
Task 5: Grade Assignment Script

Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
*/
let day = 5;
switch(day){
    case 1:
        day == 1;
        console.log('Monday');
        break;
        case 2:
            day == 2;
            console.log('Tuesday');
            break;
            case 3:
                day == 3;
                console.log('Wednesday');
                break;
                case 4:
                    day == 4;
                    console.log('Thursday');
                    break;
                    case 5:
                        day == 5;
                        console.log('Friday');
                        break;
                        case 6:
                            day == 6;
                            console.log('Saturday');
                            break;
                            case 7:
                                day == 7;
                                console.log('Sunday');
                                break;
}

let marks = 55;
let grade;
switch(true){
    case (marks >= 70):
        grade = 'A';
        break;
    case (marks >= 60):
        grade = 'B';
        break;
    case (marks >= 50):
        grade = 'C';
        break;
    case (marks >= 40):
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
    
}

console.log(`Grade ${grade}`);




/* 
Task 6: Even or Odd Script
Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
*/

number = 2;
let result = (number%2 == 0  )? 'even' :  "odd" ;
console.log(result);

/* 
Task 7: Leap Year Check Script
Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
*/
let year = 2027;
if((year%4 == 0 && year%100 !==0) || year % 400 == 0){
    console.log(year,' is leap year');
}else{
    console.log(year,' is not a leap year');

}