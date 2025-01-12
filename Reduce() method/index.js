const prices = [12,345,21,42,15,6,1,2,456,9,2.98]

const total = prices.reduce(sum)

console.log(`$${total.toFixed(2)}`)


// accumulator = previous element //element = next element
function sum(accumulator, element){
    return accumulator + element

}

const grades = [75,50,90,80,65,95]

const max = grades.reduce(getMax)

console.log(max)

function getMax(accumulator, element){
    return Math.max(accumulator,element)
}