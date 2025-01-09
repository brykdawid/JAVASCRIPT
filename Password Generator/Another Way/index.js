function generatePass(){
    const passLenght = document.getElementById("passLenght").value;

        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbersChars = "0123456789";
        const symbolsChars = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

        if(isNaN(passLenght) || passLenght <= 0){
            alert("Provide correct value of length!")


        }
            let availableChars = "";
            let password = "";
            
            const lowerCase = document.getElementById("lowerCase");
            const upperCase = document.getElementById("upperCase");
            const numbers = document.getElementById("numbers");
            const symbols = document.getElementById("symbols");

            if (lowerCase.checked) availableChars += lowerCaseChars
            if (upperCase.checked) availableChars += upperCaseChars
            if (numbers.checked) availableChars += numbersChars
            if (symbols.checked) availableChars += symbolsChars

            if (availableChars === "") {
                alert("Please select at least one character type!");
                return;
            }

            for(i=0;i<passLenght;i++){
                const randomIndex = Math.floor(Math.random()*availableChars.length)
                password += availableChars[randomIndex];
            }

        
            document.getElementById("passwordResult").textContent = password;
         
    
}