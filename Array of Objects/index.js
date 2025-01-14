const fruits = [{name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "cocount", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}
]


fruits[0].name

console.log(fruits[0].calories)

fruits.push({name: "grapes", color: "purple", calories: 62})

console.log(fruits)

fruits.pop();

console.log(fruits)

//fruits.splice(1,2)
//console.log(fruits)


//forEach


fruits.forEach(fruit => console.log(fruit.calories))

//map

const fruitNames = fruits.map(fruit => fruit.name)
console.log(fruitNames)

const fruitColor = fruits.map(fruit => fruit.color)
console.log(fruitColor)

const fruitCalories = fruits.map(fruit => fruit.calories)
console.log(fruitCalories)

//filter()

const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow")
console.log(yellowFruits)


const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
console.log(lowCalFruits)

//reduce()

const maxFruit = fruits.reduce((max, fruit) => 
        fruit.calories > max.calories ?
        fruit : max)

console.log(maxFruit)

const minFruit = fruits.reduce((min, fruit) => 
    fruit.calories < min.calories ?
    fruit : min)

console.log(minFruit)