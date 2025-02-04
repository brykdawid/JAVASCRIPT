/*
NodeList - statyczna kolekcja składająca się z elementów HTML
przy pomocy id, class, element
Tworzy się ją za pomocą querySelectorAll()
Podobna do tablicy, ale nie ma funkcji map, filter i reduce
NodeList nie zaktualiazuje się automatycznie do wprowadzonych zmian
*/

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons)


//ADD HTML/CSS PROPERITES

buttons.forEach(button => {
    button.style.backgroundColor = "rgb(5, 90, 5)"
    button.textContent += "🥸"
})

//CLICK EVENT LISTENER

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "red"
    })
})

//  MOUSEOVER + MOUSEOUT EVENT LISTENER

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "rgb(8, 184, 8)"
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "rgb(5, 90, 5)"
    })
})

//ADD ELEMENT

const newButton = document.createElement("button");

newButton.textContent = "Button 5";
newButton.classList = "myButtons";

document.body.appendChild(newButton);

console.log(buttons) //nie ma button 5

//reczne dodanie go do NodeListy
buttons = document.querySelectorAll(".myButtons");
console.log(buttons)

//REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons")
        console.log(buttons)
    })
})