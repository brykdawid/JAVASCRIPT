/*
1. declaration = let x;
2. assignment = x = 100;
*/

let x;
x = 100;

console.log(x);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your GPA is ${gpa}`)

let firstName = "Dawid";
console.log(typeof firstName)
console.log(`Your name is ${firstName}`);

let email = "jklhfdshfds@gmail.com"
console.log(typeof email)

let online = true;
console.log(typeof online);
console.log(online)

let fullName = "Dawid Bryk";
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;