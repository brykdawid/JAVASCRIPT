/*
DOM - DOCUMENT OBJECT MODEL

Object{} reprezetujacy przegladana strone w przegladarce internetowej i dostarcza 
API dzieki ktorym mozesz z nia wchodzi w interakcje
Przegladarka internetowa kontruuje DOM przy ladowaniue dokumentu HTML i tworzy 
strukture ze wszystkich elementow w postaci drzewa
JS ma dynaczminy dostep do DOM, moze zmienac zawartosc, strukture oraz styl strony

*/

console.dir(document);

document.body.style.backgroundColor = "grey"

const username = " dawidcegla"
const welcomeMsg = document.getElementById("welcomeMsg");

welcomeMsg.textContent += username === "" ? ` Guest` : username

