/*
.map() = accepts a callback and applies that function to each element of an array, 
then return a new array
*/


const numbers = [1,2,3,4,5];

const squares = numbers.map(sqaure)
const cubes = numbers.map(cube)

function sqaure(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}

console.log(squares)
console.log(cubes)


const students = ["Dawid", "Kamil", "Mateusz","Tymek"]

function upperCase(element){
    return element.toUpperCase();
}

const studentsUpper = students.map(upperCase)
console.log(studentsUpper)

function lowerCase(element){
     return element.toLowerCase();
}

const studentsLower = students.map(lowerCase)
console.log(studentsLower)


const dates = ["2025-1-10","2024-1-10","2026-2-21"]
const formatedDates = dates.map(formatDates)
console.log(formatedDates)

function formatDates(element){
    const parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}