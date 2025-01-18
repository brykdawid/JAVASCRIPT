const display = document.getElementById("displayCal");

function appendToDisplay(input){
    display.value += input;
}

function clearAll(){
    display.value = "";
}

function calculate(){
    try{
        if(display.value.includes("^")){
            display.value = display.value.replaceAll("^", "**")
            display.value = eval(display.value)
        }
        else if(display.value.includes("e")){
            display.value = display.value.replaceAll("e","2,71")
            display.value = eval(display.value)
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

    display.value = `-${display.value}`

}

function pow2nd(input){
    display.value += input;
}
function pow3rd(input){
    display.value += input;
}
function powE(){
    const values = display.value.split(/[-,+/%]/);
    
    // Pobierz ostatnią wartość z tablicy
    const lastValue = values.at(-1);

    // Utwórz nową wartość w formacie e^lastValue
    display.value = `e^${lastValue}`;


}