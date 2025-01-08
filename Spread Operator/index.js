/*
...
allows an iterable (array or string ex.) to be expanded into separate elements
- unpacking the elements
*/

let numbers = [1,2,3,4,5]
let maximum = Math.max(...numbers); //bez tych 3 kropek odpowiedz byla NaN
let minimum = Math.min(...numbers);

console.log(maximum)
console.log(minimum)

let username = "Dawid Bryk"
let letters = [...username].join("-")

console.log(letters)

let fruits = ["apple","orange","banana"]
let vegetables = ["carrots", "celery", "potatoes"]
let newFruits = [...fruits, ...vegetables, "eggs", "milk"]
console.log(fruits)
console.log(newFruits)