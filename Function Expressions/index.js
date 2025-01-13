// function declaratio = definiujemy uzywalny wiele razy blok kodu wykujacy 
// zlecone zadanie


/*
function hello(){
    console.log("Hello")
}
*/


// function expression = sposob zdefiniowania funkcji jako wartosc


const hello = function(){
    console.log("Hello")
}

hello()


setTimeout(hello, 3000);

setTimeout(function(){
    console.log(`dskjhfaksf`)
}, 3000)


const numbers = [1,2,3,4,5,6]
const squares = numbers.map(function(element){
    return Math.pow(element, 2)
}
)

console.log(squares)

const cubes = numbers.map(function(element){
    return Math.pow(element, 3)
})

console.log(cubes)
const evenNums = numbers.filter(
    function(element){
        return element %2 === 0
    }
)

console.log(evenNums)

const oddNums = numbers.filter(
    function(element){
        return element %2 !== 0
    }
)

console.log(oddNums)

const total = numbers.reduce(
    function(accumulator, element){
        return accumulator + element
    }
)

console.log(total)