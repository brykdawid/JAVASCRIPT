const display = document.getElementById("displayCal");

function appendToDisplay(input){
    display.value += input;
}

function clearAll(){
    display.value = "";
}

function calculate(){
    try{
        if(display.value.includes("^") && display.value.includes("e")){
            display.value = display.value.replaceAll("^", "**")
            display.value = display.value.replaceAll("e","2.71")
        }
        else if(display.value.includes("^" )){
            display.value = display.value.replaceAll("^", "**")
            display.value = eval(display.value)
        }
        else if(display.value.includes("e")){
            display.value = display.value.replaceAll("e",2,71)
            display.value = eval(display.value.toFixed(2))
        }
        else{
        display.value = eval(display.value)
        }
    }
    catch(error){
        display.value = "Error"
    }
    
}
function negativeNum(input){
    display.value = `${input}${display.value}`

}

function pow2nd(input){
    display.value += input;
}
function pow3rd(input){
    display.value += input;
}
function powE(){
    const values = display.value.split(/[-,+/*%]/);
    const lastValue = values.at(-1);
    display.value = `e^${lastValue}`;

}
function powX(input){
    display.value += input

}
function pow10(){
    const values = display.value.split(/[-,+*/%]/);
    const lastValue = values.at(-1);
    display.value = `10^${lastValue}`;
}
function percentage(input){
    display.value += input;
    const values = display.value.split(/[-,+/*%]/);
    console.log(values)
    const firstValue = values.at(0)
    console.log(firstValue)
    const lastValue = values.at(-2)
    console.log(lastValue)
    
    const percentageNum = firstValue*lastValue/100
    console.log(percentageNum)
    display.value = firstValue-percentageNum

}

function factorial(input){
    display.value += input
    const value = display.value.split(/[!]/)
    const number = value.at(0)
    console.log(number)
    

    let numbers = [];
    for(let i = number; i>0; i--){
        numbers.push(i);
    }
    console.log(numbers)
    function totalNum(accelerator, number){
        return accelerator*number
    }
    
    const total = numbers.reduce(totalNum)

    display.value = total
    
}
function divideByX(){
    const values = display.value.split(/[-+,/%*]/)
    console.log(values)
    const number = values.at(-1)
    let provideNum = `(1/${number})`
    display.value = provideNum
}
function funcPI(input){
    display.value += `*${input}`
}
function randFun(){
    const randomNum = Math.random().toFixed(8);
    console.log(randomNum)
    display.value = `${display.value}${randomNum}`
    
}
function sqrt2(){
    const values = display.value.split(/[-+,/%*]/)
    console.log(values)
    const number = values.at(-1)
    let provideNum = Math.sqrt(number);
    display.value = provideNum
}
function cbrt3(){
    const values = display.value.split(/[-+,/%*]/)
    console.log(values)
    const number = values.at(-1)
    let provideNum = Math.cbrt(number);
    display.value = provideNum

}