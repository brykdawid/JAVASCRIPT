//Example 1 <h1>

//Krok 1 - stworz element
const newH1 = document.createElement("h1");


//Krok 2 - dodad atrybuty/wartosci
newH1.textContent = "I like pizza"
newH1.id = "myH1"
newH1.style.color = "tomato"
newH1.style.textAlign = "center"

//Krok 3 - dodaj element to DOM'u
//document.body.append(newH1)
//document.body.prepend(newH1)

//document.getElementById("box1").append(newH1)
//document.getElementById("box1").prepend(newH1)

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2)


//bez id->
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2])

//Usun element HTML
document.body.removeChild(newH1)

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

document.getElementById("fruits").append(newListItem)


//przed orange
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange)