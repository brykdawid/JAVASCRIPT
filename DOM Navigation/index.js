/*
DOM Navigation = prosec nawigowania przez strukture dokumentu HTML uzywajac JS

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children

*/



//.firstElementChild

const element = document.getElementById("fruits")
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"


const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "purple"
});



//.lastElementChild

const element2 = document.getElementById("fruits")
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "yellow"

const ulElements2 = document.querySelectorAll("ul");
ulElements2.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "lightblue"
})


//.nextElementSibling

const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "red"


//.previousElementSibling

const element4 = document.getElementById("potatos");
const prevSibling = element4.previousElementSibling;
prevSibling.style.backgroundColor = "pink";


//.parentElement

const element5 = document.getElementById("pie");
const parrent = element5.parentElement;
parrent.style.backgroundColor = "brown"


//.children

const element6 = document.getElementById("fruits");
const children = element6.children;

children[1].style.backgroundColor = "grey"

Array.from(children).forEach(child =>
    {
        child.style.backgroundColor = "grey"
    }
)

