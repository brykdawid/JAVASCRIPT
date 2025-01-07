/* type conversion
change of datatype of value
*/


let age = window.prompt("How old are you:"); // string datatype
age = Number(age);
age+=1;

console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";


x = Number(x);
z = String(z);
y = Boolean(y);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

