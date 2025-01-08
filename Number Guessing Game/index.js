const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");
const guessBtn = document.getElementById("guessBtn");
let guessOutput = document.getElementById("guessOutput");

let attempts = 0;
let randomNum;
let min, max;

startBtn.onclick = function(){
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    if(min <= 0 || max <= 0 || min > max){
        output.textContent = ("Incorrect values, cant be 0 or less/ min boundary bigger than max")
    } else{
    randomNum = Math.floor(Math.random()*(max - min +1 )) +min;
    attempts = 0;
    output.textContent = (`Game begins min:${min} max:${max}`)
    guessOutput.textContent = "";
    
}
}
guessBtn.onclick = function(){
    if (randomNum === undefined) {
        guessOutput.textContent = "Please start the game first!";
        return;
    }

    const guess = parseInt(document.getElementById("guess").value);

    
    
    if(guess === 0 || guess < min || guess > max){
        attempts++;
        guessOutput.textContent = (`Check the provided by you values, guess the number between them. Attempts: ${attempts}`)

    }
    else if(guess>randomNum){
        attempts++
        guessOutput.textContent = (`Lower, attempts: ${attempts}`)
    }
    else if(guess<randomNum){
        attempts++
        guessOutput.textContent = (`Higher, attempts: ${attempts}`)
    }
    else if(guess == randomNum){
        attempts++
        guessOutput.textContent = (`You won, total attempts: ${attempts}`)
    }
}

