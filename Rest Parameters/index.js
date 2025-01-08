/*
rest parameters = (...rest) allow a function work wutg a variable number of arguments by bundling them
into a array

spread = expands an array into seperate elements
rest = bundles separate elements into an array
*/

function openFridge(...foods){
    console.log(...foods)
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza"
const food2 = "hamburger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"



//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);


function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,2,3,4,5,6);

console.log(`Your total is $${total}`)


function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;

}


const total2 = getAverage(75,100,92,32,92);
console.log(total2)


function combineString(...strings){
    return strings.join(" ")

}

const fullName = combineString("Mr.","Spongebob","Squarepants","III");

console.log(fullName)


