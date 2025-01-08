const radio1 = document.getElementById("cF");
const radio2 = document.getElementById("fC");
const submitBtn = document.getElementById("submitBtn");
const resultOutput = document.getElementById("resultOutput");

let temperatureAmount = 0;

function celToFah(){
    const temperatureAmount = parseInt(document.getElementById("temperatureAmount").value);
    let result = (temperatureAmount * 1.8) + 32;
    resultOutput.textContent = (`Fahrenheit Temperature: ${result}`)

}
function fahToCel(){
    const temperatureAmount = parseInt(document.getElementById("temperatureAmount").value);
    let result = (temperatureAmount-32) / 1.8 ;
    resultOutput.textContent = (`Celcius Temperature: ${result}`)

}
submitBtn.onclick = function(){
    if(radio1.checked){
        celToFah();
    }
    else if(radio2.checked){
        fahToCel();
    }
}
