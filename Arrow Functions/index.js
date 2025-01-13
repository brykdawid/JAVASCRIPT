/*
arrow functions = krótki sposób na posanie funkcji dobrze działąjących z prostymi funkcjami 
uzywanymi jednorazowo
(parameters) => some code
*/

const hello = (name, age) => {console.log(`Hello ${name}`)
                                console.log(`You are ${age} old`)}


hello(`dadjkhgkjgkj`, 25)


setTimeout( () => console.log(`Hello`),3000);

const numbers = [1,2,3,4,5,6]

const squareNums = numbers.map((Element) => Math.pow(Element,2))
console.log(squareNums)
const cubeNums = numbers.map((Element) => Math.pow(Element, 3))
console.log(cubeNums)
const evenNums = numbers.filter((Element)=> Element %2 === 0)
console.log(evenNums)
const oddNums = numbers.filter((Element) => Element %2 !== 0)
console.log(oddNums)
const total = numbers.reduce((accumulator, element) => accumulator + element)
console.log(total)






const sub1 = document.getElementById("sub1")
const sub2 = document.getElementById("sub2")
const sub3 = document.getElementById("sub3")
const mainSub = document.getElementById("mainSub")

const sub1p = document.getElementById("sub1p")
const sub2p = document.getElementById("sub2p")
const sub3p = document.getElementById("sub3p")


sub1.onclick = () => {
    const name = document.getElementById("name").value
    document.getElementById("sub1p").textContent = `Hello ${name}`
}

sub2.onclick = () =>{
    const age = document.getElementById("age").value
    sub2p.textContent = `you are ${age} old`
}

mainSub.onclick = () => {
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const number = parseInt(document.getElementById("number").value)

    sub1p.textContent = `Hello ${name}`
    sub2p.textContent = `you are ${age} old`
    sub3p.textContent = `${234+number}`
}

