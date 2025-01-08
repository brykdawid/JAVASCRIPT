/*
section of resuable code to use whenever I want
*/
const functionButton = document.getElementById("functionButton");
const addBtn = document.getElementById("addBtn");

function happyBirthday(username, age){
    console.log("kjhdgfhgasdjkksjahfjahsgfjhas")
    console.log("fkjdsahfkaljsh")
    console.log(`${username}`)
    console.log(`${age}`)


}
function add(x,y){
    return x+y;
}
function isEmailValid(email){

    return email.includes("@") ? ("Valid") : ("Invalid")
}

functionButton.onclick = function(){
    happyBirthday("Dawid", 25);
}



addBtn.onclick = function(){
    console.log(add(2,3))
}

console.log(isEmailValid("kjhdas@ksd.cs"))
