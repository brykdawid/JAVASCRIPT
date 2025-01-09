function generatePass(){
    const passLenght = parseInt(document.getElementById("passLenght").value)
    
    if(isNaN(passLenght || passLenght <=0)){
        alert("Number of characters must be higher than 0!")
        return;
    }

    const options = [
        { id: "lowerCase", chars: "abcdefghijklmnopqrstuvwxyz" },
        { id: "upperCase", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
        { id: "numbers", chars: "0123456789" },
        { id: "symbols", chars: "!@#$%^&*()_+[]{}|;:',.<>?/`~" }
    ];

    let availableChars = "";
    let password = "";


    options.forEach(option => {
        if(document.getElementById(option.id).checked){
            availableChars += option.chars
        }
    })

    if(availableChars === ""){
        alert("You have to select at least one option!")
    }

    for(let i = 0; i < passLenght; i++){
        const randomIndex = Math.floor(Math.random()*availableChars.length)
        password += availableChars[randomIndex];
    }
    document.getElementById("passwordResult").textContent = password;
}

