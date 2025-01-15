/*

error = objekt stworzony aby reprezentwoac napotkany problem

try { } = wyklucza kod ktory moze sprawiac potencjalne problemy
catch { } = wyłapuje i zarządza Erorrami napotkanymi w instrukcji try { }
finally { } = zawsze sie wykonuje, uzywane najczesniej jako cleanup

*/
try{
    console.log(x)
}


catch(error){
console.error(error)
}
finally{
    console.log(`Execute always`)
}
console.log(`End`)

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt(`Enter a divisor`));

    if(divisor == 0){
        throw new Error(`You cant divide by 0`)
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error(`Given value must be a number`)
    }

    const result = dividend/divisor;
    console.log(result)
}

catch(error){
    console.error(error)
}

console.log(`end`)
