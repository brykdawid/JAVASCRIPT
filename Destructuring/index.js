/*
destructuring = wypakowanie wartosci z tablic oraz obiektow
nastepnie przypisywanie ich do zmiennych w wygodny sposob
[] = destrukturyzacja tablicy
{} = destrukturyzacja objektu
 5 przykładów
*/

//swapping the values of two variables


let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a)
console.log(b)

//swap 2 elements in an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(colors)

//assign array elements to variables

const collors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColod, ...extraColors] = colors;

console.log(firstColor)
console.log(secondColor)
console.log(thirdColod)
console.log(extraColors)

//extract values from objects

const person1 = {
    firstName: "Dawid",
    lastName: "Bryk",
    age: 30,
    job: "XD",
}
const person2 = {
    firstName: "Magda",
    lastName: "Kowalewska",
    age: 20,
}

const {firstName, lastName, age, job="Unemployed"} = person2

console.log(firstName, lastName, age, job )

//destructure in function parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
    

}

displayPerson(person2)