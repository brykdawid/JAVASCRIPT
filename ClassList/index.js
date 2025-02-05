/*

ClassList = element w JS uzywany do interakcji z elementami
listy klas (CSS classes) 
pozwala na tworzenie reusable klas dla wielu elementów w plikach 

add()
remove()
toggle(remove if present, add if not)
replace(oldClass, newClass)
contains()

*/


const myButton = document.getElementById("myButton");


//add()
myButton.classList.add("enabled")


//remove()
myButton.classList.remove("enabled");


//toggle()
myButton.addEventListener("mouseover", event => {
    myButton.classList.toggle("hover")
})

myButton.addEventListener("mouseout", event => {
    myButton.classList.toggle("hover")
})

//replace()
const myButton2 = document.getElementById("myButton2");

myButton2.classList.add("enabled");

myButton2.addEventListener("click", event => {

    //contains()
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😡"
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }

})

const myH1 = document.getElementById("myH1")
 
myH1.classList.add("enabled")
myH1.addEventListener("click", event => {

    //contains()
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😡"
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }

})

const myButtons = document.querySelectorAll(".myButtons");

myButtons.forEach(button => {
    button.classList.add("enabled")
})

myButtons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover")
    })
})
myButtons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover")
    })
})

myButtons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😡"
        }
        else{
            event.target.classList.replace("enabled", "disabled")
        }
        
    })
})