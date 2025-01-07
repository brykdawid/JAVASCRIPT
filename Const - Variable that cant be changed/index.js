/* 
 const = variable that cant be changed
*/

const PI = 3.14159;
let radius;
let cincumference;

radius = Number(radius);

cincumference = 2 * PI *radius;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    cincumference = 2 * PI *radius;
    document.getElementById("p3").textContent = (`Cincumference ecuals: ${cincumference}`);
}