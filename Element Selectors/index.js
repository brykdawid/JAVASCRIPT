/*

element selectors = metoda uzywana do targetowania i manipulowania elementami HTML
pozwala na wybranie jednego lub wielu elementow HTML z DOM

1. document.getElementById()  - Element or Null
2. document.getElementsClassName() - HTML collection
3. document.getElementsByTagName() - HTML collection
4. document.querySelector() - First Element or Null
5. document.querySelecotAll() - Nodelist

*/

//2. document.getElementsClassName() - HTML collection
const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow"
myHeading.style.textAlign = "center"

console.log(myHeading)



const fruits = document.getElementsByClassName("fruits");

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow"
    
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "lightblue"
})


//3. document.getElementsByTagName() - HTML collection


const h4Elements = document.getElementsByTagName("h4")
const liElements = document.getElementsByTagName("li")

console.log(h4Elements)

h4Elements[0].style.backgroundColor = "yellow"

for(let h4element of h4Elements){
    h4element.style.backgroundColor = "lightblue"
}
for(let lielement of liElements){
    lielement.style.backgroundColor = "lightblue"
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "lightgreen"
})
Array.from(liElements).forEach(liElemet => {
    liElemet.style.backgroundColor = "lightgreen"
})


//4. document.querySelector() - First Element or Null

const element = document.querySelector("li");
element.style.backgroundColor = "grey"
console.log(element)


//5. document.querySelecotAll() - Nodelist

const fruitsElements = document.querySelectorAll(".fruits")

fruitsElements[0].style.backgroundColor = "grey"

const foods = document.querySelectorAll("h4")

foods[1].style.backgroundColor = "grey"


console.log(foods)

foods.forEach(food =>{
    food.style.backgroundColor = "purple"
})
