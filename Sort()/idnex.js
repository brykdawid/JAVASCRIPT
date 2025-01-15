/*
sort() = metoda uzwana do sortowania elementó w tablicy w miejscu
metoda sortuje elementy jako stringi w sposob lexykograficzny (alfabet + cyfry + symbole) 
jako string
*/

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"]

fruits.sort();

console.log(fruits)

let numbers = [1,5,2,4,6,31,235,21,6,1,2,5,2]
numbers.sort((a, b) => a - b);

console.log(numbers)


const people = [{name: "dawid", age: 30, gpa: 3.0},
    {name: "magda", age: 3220, gpa: 4.0},
    {name: "kamil", age: 2, gpa: 2.0},
    {name: "gibon", age: 33, gpa: 5.0}]

people.sort((a,b) => a.age - b.age)
console.log(people )

people.sort((a, b) => a.name.localeCompare(b.name)) //sortowanie po name alfabetycznie
console.log(people)