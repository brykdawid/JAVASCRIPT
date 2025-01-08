let fruit = ["apple", "orange", "banana"];


console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])


fruit.push("coconut")
console.log(fruit[3])

fruit.pop();
console.log(fruit)


fruit.unshift("mango")
console.log(fruit[0])

fruit.shift();
console.log(fruit)

let numOfFruits = fruit.length;
let index = fruit.indexOf("apple");
let notExistingIndex = fruit.indexOf("mango"); //not existing returns -1 - if statements for checking if something exists

console.log(numOfFruits)
console.log(index)
console.log(notExistingIndex)

fruit.sort();

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

for(let fruits of fruit){
    console.log(fruits)
}


