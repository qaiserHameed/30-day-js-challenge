                                                                    // Day 4: Loops

/* 
Activity 1: For Loop

Task 1: Write a program to print numbers from 1 to 10 using a for loop.
Task 2: Write a program to print the multiplication table of 5 using a for loop.
*/
let num = 1;
for(num; num <= 10; num++){
    console.log(num);
}

let tableNum = 5;
let number = 1;
for(number; number<=10; number++){
   output = tableNum * number
    console.log(`${tableNum} * ${number} = ${output}`);
}

/* 
Activity 2: While Loop

Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
Task 4: Write a program to print numbers from 10 to 1 using a while loop.
*/
let a =1;
let b = 2;
while(b<=10){
    a += b;
    b++
}
console.log(a);
let c=10;
while(c >= 1){
    console.log(c);
    c-- ;
}

/* 
Activity 3: Do…While Loop

Task 5: Write a program to print numbers from 1 to 5 using a do…while loop.
Task 6: Write a program to calculate the factorial of a number using a do…while loop.
*/
let f = 1;

do{
    console.log(f);
    f++
}while(f <= 5)


    console.log("factorial");

    let result = 1;
    let i = 1;
    let n = 5;
    do{
        result = result * i //1 2 6
        i++
        
    }while(i <= n){
        console.log(result);
    }

    /* 
    Write a program to print a pattern using nested for loops.
    */

    console.log("star");
   let star = "*";
   let st = 1;
   let ab = 1;
   console.log(star);
   for(st; st <= 1; st++){
    for(ab;ab <= 4; ab++){
        star += " *"
        console.log(star);
    }
   }

   //Write a program to print numbers from 1 to 10 but skip the number 5  using the continue statement
   console.log("continue statement");
   let g = 1;
   for(g;g <= 10 ; g++){
    if(g == 5){
        continue;
    }
    console.log(g);
   }

    //Write a program to print numbers from 1 to 10 but stop  the loop when number is 7  using the break statement

    console.log("break statement");
    let h =1;
    for(h;h<=10;h++){
        if(h == 7){
            break;
        }
        console.log(h);
    }