/*
setTimeout() = funkcja pozwalajaca na planowanie exekucji funkcji po wyznaczonym czasie

setTimeout(callback, delay)
clearTimeout(timeoutId)
*/


/*
const timeoutId = setTimeout(function sayHello(){
                        window.alert(`Hello`)
                    }, 3000)

//setTimeout(() => window.alert(`Hello`), 6000)

clearTimeout(timeoutId)
*/
let timeOutId;

function startTimer(){
    timeOutId = setTimeout(() => window.alert("on click function"), 3000)
    console.log(`started`)
}

function stopTimer(){
    clearTimeout(timeOutId)
    console.log(`stopped`)
}