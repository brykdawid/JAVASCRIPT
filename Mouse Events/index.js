/*

eventListener = czeka na specjalne eventy w celu tworzenia interaktywnych stron:
click, mouseover, mouseout

.addEventListener(event, callback/arrow func);

*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch 🥸";
})

myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Dont do it 😁";
})

myButton.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😊";
})




