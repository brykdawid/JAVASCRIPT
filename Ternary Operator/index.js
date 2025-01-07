/*
ternary operator = shortcut to if and else statements
condition ? codeIfTrue : codeIfFalse
*/

let age = 18;

let message = age >= 18 ? "You are an adult" : "Nigga"
console.log(message);

let time = 16;

let greeting = time < 12 ? "Good Morning" : "Good Afternoon"
console.log(greeting)

let isStudent = true;

let ifStudent = isStudent ? "You are a student" : "You are not a Student"
console.log(ifStudent);

let purchaseAmount = 125;
let discount = purchaseAmount >=100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount *(discount/100)}`);
