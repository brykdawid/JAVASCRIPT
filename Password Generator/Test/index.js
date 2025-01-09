function generatePass(includeLower, includeUpper, includeNums, includeSymbols){
    const passLenght = document.getElementById("passLenght").value;

    if(isNaN(passLenght || passLenght <= 0)){
        alert(`Password too short, select values greater than 0!`)
    }

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

    let allowedChars = "";
    let password = "";

            const lowerCase = document.getElementById("lowerCase");
            const upperCase = document.getElementById("upperCase");
            const numbers = document.getElementById("numbers");
            const symbols = document.getElementById("symbols");

    if(lowerCase.checked){
        includeLower = true;
    }
    if(upperCase.checked){
        includeUpper = true;
    }
    if(numbers.checked){
        includeNums = true;
    }
    if(symbols.checked){
        includeSymbols = true;
    }

    allowedChars += includeLower ? lowerCaseChars : ""
    allowedChars += includeUpper ? upperCaseChars : ""
    allowedChars += includeNums ? numbersChars : ""
    allowedChars += includeSymbols ? symbolsChars : ""

    for(i=0;i<passLenght;i++){
        randomIndex = Math.floor(Math.random()*allowedChars.length)
        password += allowedChars[randomIndex]
    }

    document.getElementById("passwordResult").textContent = password
    
    

}