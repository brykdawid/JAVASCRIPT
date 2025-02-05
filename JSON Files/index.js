/*
JSON = JS Object Notation - jest to format pliku wymiany danych
uzywany do wymieniana danych miedzy serwerem a aplikacja
JSON FIle = {key:value} OR [value1, value2, value3]

JSON.stringify() = przekszatłca objekt JS do JSON string'a
JSON.parse() = przekszałtca JSON string w JS objekt
*/

const names = `["Dawid", "Mateusz", "Magda", "Kamil"]`;
const person = `{
    "name": "Dawid",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["CS2", "CSGO", "Pilka Nozna"]
}`

const people = `[{
    "name": "Mateusz",
    "age": 20,
    "isEmployed": true,
    "hobbies": ["CS2", "CSGO", "Pilka Nozna"]
},
{
    "name": "Magda",
    "age": 40,
    "isEmployed": false,
    "hobbies": ["CS2", "CSGO", "Pilka Nozna"]
},
{
    "name": "Kamil",
    "age": 55,
    "isEmployed": true,
    "hobbies": ["CS2", "CSGO", "Pilka Nozna"]
},
{
    "name": "Tymek",
    "age": 10,
    "isEmployed": false,
    "hobbies": ["CS2", "CSGO", "Pilka Nozna"]
}]`



const jsonString = JSON.stringify(people);

console.log(jsonString);
console.log(person)
console.log(people)

const jsObject = JSON.parse(people);
console.log(jsObject)


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error))