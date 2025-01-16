const display = document.getElementById("displayCal");

function appendToDisplay(input){
    display.value += input;
}

function clearAll(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
    
}